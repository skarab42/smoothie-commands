import CommandError from './CommandError.js'
import { INVALID_COMMAND_ERROR } from '../error-types.js'

export default class InvalidCommandError extends CommandError {
  constructor () {
    super({
      type: INVALID_COMMAND_ERROR,
      message: 'Command must contain [command] and [parse] properties.'
    })
  }
}
