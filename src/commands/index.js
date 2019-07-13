import CommandError from './errors/CommandError.js'
import * as errorTypes from './errors/types.js'
import * as commands from './commands.js'
import parse from './parse.js'
import use from './use.js'

Object.values(commands).map(use)

export {
  CommandError,
  errorTypes,
  commands,
  parse
}
