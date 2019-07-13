import CommandError from './CommandError.js'
import { ALREADY_SUSPENDED_ERROR } from './types.js'

export default class AlreadySuspendedError extends CommandError {
  constructor () {
    super({
      type: ALREADY_SUSPENDED_ERROR,
      message: 'Already suspended.'
    })
  }
}
