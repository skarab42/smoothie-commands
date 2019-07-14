import CommandError from './CommandError.js'
import { INVALID_ARGUMENTS_ERROR } from '../error-types.js'

export default class InvalidArgumentsError extends CommandError {
  constructor (args, usage) {
    super({
      type: INVALID_ARGUMENTS_ERROR,
      message: `Invalid arguments [${args.join(' ')}].\nUsage: ${usage}`
    })
  }
}
