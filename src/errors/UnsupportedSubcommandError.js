import CommandError from './CommandError.js'
import { UNSUPPORTED_SUBCOMMAND_ERROR } from '../error-types.js'

export default class UnsupportedSubcommandError extends CommandError {
  constructor (subcommand, usage) {
    super({
      name: 'UnsupportedSubcommandError',
      type: UNSUPPORTED_SUBCOMMAND_ERROR,
      message: `Unsupported subcommand [${subcommand}].\nUsage: ${usage}`
    })
  }
}
