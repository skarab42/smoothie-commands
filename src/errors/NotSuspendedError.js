import CommandError from './CommandError.js'
import { NOT_SUSPENDED_ERROR } from '../error-types.js'

export default class NotSuspendedError extends CommandError {
  constructor () {
    super({
      name: 'NotSuspendedError',
      type: NOT_SUSPENDED_ERROR,
      message: 'Not suspended play.'
    })
  }
}
