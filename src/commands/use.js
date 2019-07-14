import InvalidCommandError from '../errors/InvalidCommandError.js'

export const usedCommands = {}

export default function use (command) {
  if (!command.command || !command.parse || typeof command.parse !== 'function') {
    throw new InvalidCommandError()
  }
  usedCommands[command.command] = command
}
