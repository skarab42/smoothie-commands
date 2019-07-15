import RequestError from './RequestError.js'
import { REQUEST_OPEN_ERROR } from '../error-types.js'

export default class RequestOpenError extends RequestError {
  constructor ({ message, response }) {
    super({
      response,
      name: 'RequestOpenError',
      type: REQUEST_OPEN_ERROR,
      message
    })
  }
}
