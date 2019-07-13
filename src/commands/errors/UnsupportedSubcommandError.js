import CommandError from './CommandError.js'
import { UNSUPPORTED_SUBCOMMAND_ERROR } from './types.js'

export default class UnsupportedSubcommandError extends CommandError {
  constructor (subcommand, usage) {
    super({
      type: UNSUPPORTED_SUBCOMMAND_ERROR,
      message: `Unsupported subcommand [${subcommand}]\nUsage: ${usage}`
    })
  }
}
