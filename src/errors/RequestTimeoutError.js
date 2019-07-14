import RequestError from './RequestError.js'
import { REQUEST_TIMEOUT_ERROR } from '../error-types.js'

export default class RequestTimeoutError extends RequestError {
  constructor ({ timeout, response }) {
    super({
      response,
      type: REQUEST_TIMEOUT_ERROR,
      message: `Timeout of [${timeout}] ms exceeded.`
    })
  }
}
