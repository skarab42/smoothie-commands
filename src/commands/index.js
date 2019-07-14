import * as commands from './commands.js'
import parse from './parse.js'
import use from './use.js'

Object.values(commands).map(use)

export {
  commands,
  parse
}
