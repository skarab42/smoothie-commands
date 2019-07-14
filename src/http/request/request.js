import responseFactory from '../request/responseFactory.js'
import RequestOpenError from '../../errors/RequestOpenError.js'
import RequestTimeoutError from '../../errors/RequestTimeoutError.js'
import RequestAbortedError from '../../errors/RequestAbortedError.js'
import ParallelRequestError from '../../errors/ParallelRequestError.js'
import NetworkError from '../../errors/NetworkError.js'
import ServerError from '../../errors/ServerError.js'

let sent = {}

export function isSent (address) {
  return !!sent[address]
}

export default function request ({
  method = 'POST',
  url = '/',
  data = null,
  timeout = 0,
  // headers = null,
  headers = [
    ['Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8']
  ],
  onUploadProgress = null,
  validateStatus = status => status >= 200 && status < 300,
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
    onUploadProgress,
    validateStatus
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
      const response = responseFactory({ params, xhr })
      return reject(new RequestOpenError({ message: error.message, response }))
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
      if (validateStatus(xhr.status)) {
        resolve(responseFactory({ params, xhr }))
      } else {
        const response = responseFactory({ params, xhr })
        reject(new ServerError({ status: xhr.status, response }))
      }
      xhr = null
    }
    // on network errors
    xhr.onerror = function onError () {
      sent[address] = false
      const response = responseFactory({ params, xhr })
      reject(new NetworkError({ response }))
      xhr = null
    }
    // on browser abord
    xhr.onabort = function onAbort () {
      if (!xhr) return
      sent[address] = false
      const response = responseFactory({ params, xhr })
      reject(new RequestAbortedError({ response }))
      xhr = null
    }
    // on timeout
    xhr.ontimeout = function onTimeout () {
      sent[address] = false
      const response = responseFactory({ params, xhr })
      reject(new RequestTimeoutError({ timeout, response }))
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
      const response = responseFactory({ params, xhr })
      reject(new ParallelRequestError({ response }))
      return
    }
    sent[address] = true
    // send request
    xhr.send(data)
  })
}
