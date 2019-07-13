import { UNDEFINED_ERROR } from './error-types.js'

export default class CommandError extends Error {
  constructor ({ message, type = UNDEFINED_ERROR }) {
    super(message)
    this.type = type
    this.name = this.constructor.name
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = (new Error(message)).stack
    }
  }
}
