import RequestError from './RequestError.js'
import { REQUEST_ABORTED_ERROR } from '../error-types.js'

export default class RequestAbortedError extends RequestError {
  constructor ({ response }) {
    super({
      response,
      name: 'RequestAbortedError',
      type: REQUEST_ABORTED_ERROR,
      message: 'Request aborted.'
    })
  }
}
