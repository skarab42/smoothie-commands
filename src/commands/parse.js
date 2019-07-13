import { UNSUPPORTED_PARSER_ERROR } from './error-types.js'
import CommandError from './CommandError.js'
import { usedCommands } from './use.js'

export default function parse ({ command, response, args }) {
  if (!usedCommands[command]) {
    throw new CommandError({
      type: UNSUPPORTED_PARSER_ERROR,
      message: `The command parser for [${command}] is not yet supported.`
    })
  }
  return usedCommands[command].parse({ args, response })
}
