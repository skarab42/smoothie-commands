import CommandError from './CommandError.js'
import { KILL_ERROR } from './types.js'

export default class KillError extends CommandError {
  constructor () {
    super({
      type: KILL_ERROR,
      message: 'KILLED'
    })
  }
}
