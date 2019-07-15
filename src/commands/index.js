import * as commands from './commands.js'
import parse from './parse.js'
import queue from './queue.js'
import use from './use.js'

Object.values(commands).map(use)

export {
  commands,
  queue,
  parse
}
