import { UNDEFINED_ERROR } from '../error-types.js'

export default class RequestError extends Error {
  constructor ({
    name = 'RequestError',
    type = UNDEFINED_ERROR,
    message,
    response,
    parentError = null
  }) {
    super(message)
    this.name = name
    this.type = type
    this.response = response
    this.parentError = parentError
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = (new Error(message)).stack
    }
  }
}
