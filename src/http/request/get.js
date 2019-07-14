import request from './request.js'

export default function get (params = {}) {
  return request({ ...params, method: 'GET' })
}
