import { UNDEFINED_ERROR } from '../error-types.js'

export default class RequestError extends Error {
  constructor ({ message, response, parentError = null, type = UNDEFINED_ERROR }) {
    super(message)
    this.type = type
    this.response = response
    this.parentError = parentError
    this.name = this.constructor.name
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = (new Error(message)).stack
    }
  }
}
