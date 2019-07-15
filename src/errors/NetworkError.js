import RequestError from './RequestError.js'
import { NETWORK_ERROR } from '../error-types.js'

export default class NetworkError extends RequestError {
  constructor ({ response }) {
    super({
      response,
      name: 'NetworkError',
      type: NETWORK_ERROR,
      message: 'Network error.'
    })
  }
}
