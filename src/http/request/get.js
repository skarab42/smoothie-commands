import request from './request'

export default function get (params = {}) {
  return request({ ...params, method: 'GET' })
}
