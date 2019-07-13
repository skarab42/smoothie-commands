import { INVALID_COMMAND_ERROR } from './error-types.js'
import CommandError from './CommandError.js'

export const usedCommands = {}

export default function use (command) {
  if (!command.command || !command.parse || typeof command.parse !== 'function') {
    throw new CommandError({
      type: INVALID_COMMAND_ERROR,
      message: 'Command must contain [command] and [parse] properties.'
    })
  }
  usedCommands[command.command] = command
}
