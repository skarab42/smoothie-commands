import CommandError from './CommandError.js'
import { UNSUPPORTED_COMMAND_ERROR } from '../error-types.js'

export default class UnsupportedCommandError extends CommandError {
  constructor (command) {
    super({
      type: UNSUPPORTED_COMMAND_ERROR,
      message: `Unsupported command [${command}].`
    })
  }
}
