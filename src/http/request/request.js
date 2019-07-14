import errorFactory from '../request/errorFactory.js'
import responseFactory from '../request/responseFactory.js'
import {
  REQUEST_OPEN_ERROR,
  FILE_NOT_FOUND_ERROR,
  SERVER_ERROR,
  PARALLEL_REQUEST_ERROR,
  REQUEST_TIMEOUT_ERROR,
  REQUEST_ABORTED_ERROR,
  NETWORK_ERROR
} from '../../error-types.js'

let sent = {}

export function isSent (address) {
  return !!sent[address]
}

export default function request ({
  method = 'POST',
  url = '/',
  data = null,
  timeout = 0,
  headers = null,
  onUploadProgress = null,
  ...userData
} = {}) {
  // force http protocol
  if (!url.startsWith('http://')) {
    url = `http://${url}`
  }
  // request params
  const params = {
    method,
    url,
    data,
    userData,
    timeout,
    headers,
    onUploadProgress
  }
  // create and return a Promise
  return new Promise((resolve, reject) => {
    // create http request object
    let xhr = new XMLHttpRequest()
    // extract address
    const matches = url.match(/http:\/\/([^/]+)/)
    const address = matches ? matches[1] : 'localhost'
    // open the request (async)
    try {
      xhr.open(method, url, true)
    } catch (error) {
      throw errorFactory({
        type: REQUEST_OPEN_ERROR,
        message: error.message,
        params,
        xhr
      })
    }
    // set timeout
    xhr.timeout = timeout
    // set headers
    if (headers) {
      headers.forEach(([ key, val ]) => xhr.setRequestHeader(key, val))
    }
    // on ready state change
    xhr.onreadystatechange = function onReadyStateChange () {
      if (!xhr || xhr.readyState !== 4) return
      if (xhr.status === 0) return // => onError
      sent[address] = false
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(responseFactory({ params, xhr }))
      } else {
        reject(errorFactory({
          type: xhr.status === 404 ? FILE_NOT_FOUND_ERROR : SERVER_ERROR,
          message: `Error ${xhr.status}`,
          params,
          xhr
        }))
      }
      xhr = null
    }
    // on network errors
    xhr.onerror = function onError () {
      sent[address] = false
      reject(errorFactory({
        type: NETWORK_ERROR,
        message: 'Network Error',
        params,
        xhr
      }))
      xhr = null
    }
    // on browser abord
    xhr.onabort = function onAbort () {
      if (!xhr) return
      sent[address] = false
      reject(errorFactory({
        type: REQUEST_ABORTED_ERROR,
        message: 'Request aborted',
        params,
        xhr
      }))
      xhr = null
    }
    // on timeout
    xhr.ontimeout = function onTimeout () {
      sent[address] = false
      reject(errorFactory({
        type: REQUEST_TIMEOUT_ERROR,
        message: `Timeout of ${timeout}ms exceeded`,
        params,
        xhr
      }))
      xhr = null
    }
    // on upload progress
    if (typeof onUploadProgress === 'function' && xhr.upload) {
      xhr.upload.addEventListener('progress', event => {
        if (!event.lengthComputable) return
        onUploadProgress({
          event,
          total: event.total,
          loaded: event.loaded,
          percent: event.loaded / event.total * 100
        })
      })
    }
    // parallel request prohibited
    if (isSent(address)) {
      reject(errorFactory({
        type: PARALLEL_REQUEST_ERROR,
        message: 'Parallel request prohibited. Please wait for the end of a request before sending another.',
        params,
        xhr
      }))
      return
    }
    sent[address] = true
    // send request
    xhr.send(data)
  })
}
