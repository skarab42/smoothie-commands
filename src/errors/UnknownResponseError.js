import CommandError from './CommandError.js'
import { UNKNOWN_RESPONSE_ERROR } from '../error-types.js'

export default class UnknownResponseError extends CommandError {
  constructor (usage, error) {
    super({
      name: 'UnknownResponseError',
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response.\nUsage: ${usage}`
    })
    this.parentError = error || null
  }
}
