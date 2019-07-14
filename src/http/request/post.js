import request from './request.js'

export default function post (params = {}) {
  return request({ ...params, method: 'POST' })
}
