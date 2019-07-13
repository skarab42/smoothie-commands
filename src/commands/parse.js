import UnsupportedParserError from './errors/UnsupportedParserError.js'
import { usedCommands } from './use.js'

export default function parse ({ command, response, args }) {
  if (!usedCommands[command]) {
    throw new UnsupportedParserError(command)
  }
  return usedCommands[command].parse({ args, response })
}
