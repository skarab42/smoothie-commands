import { UNDEFINED_ERROR } from '../error-types.js'

export default class CommandError extends Error {
  constructor ({
    message,
    name = 'CommandError',
    type = UNDEFINED_ERROR
  }) {
    super(message)
    this.name = name
    this.type = type
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = (new Error(message)).stack
    }
  }
}
