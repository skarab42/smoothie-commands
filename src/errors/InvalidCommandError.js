import CommandError from './CommandError.js'
import { INVALID_COMMAND_ERROR } from '../error-types.js'

export default class InvalidCommandError extends CommandError {
  constructor () {
    super({
      name: 'InvalidCommandError',
      type: INVALID_COMMAND_ERROR,
      message: 'Command must contain [command] and [parse] properties.'
    })
  }
}
