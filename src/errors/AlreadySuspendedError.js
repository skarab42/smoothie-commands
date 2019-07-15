import CommandError from './CommandError.js'
import { ALREADY_SUSPENDED_ERROR } from '../error-types.js'

export default class AlreadySuspendedError extends CommandError {
  constructor () {
    super({
      name: 'AlreadySuspendedError',
      type: ALREADY_SUSPENDED_ERROR,
      message: 'Already suspended.'
    })
  }
}
