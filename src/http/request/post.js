import request from './request'

export default function post (params = {}) {
  return request({ ...params, method: 'POST' })
}
