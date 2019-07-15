import { command } from './command/index.js'
import { queue } from '../commands/index.js'

export default function (params) {
  return queue({ ...params, callback: command })
}
