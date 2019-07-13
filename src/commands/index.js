import CommandError from './CommandError.js'
import * as errorTypes from './error-types.js'
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
