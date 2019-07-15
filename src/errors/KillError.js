import CommandError from './CommandError.js'
import { KILL_ERROR } from '../error-types.js'

export default class KillError extends CommandError {
  constructor () {
    super({
      name: 'KillError',
      type: KILL_ERROR,
      message: 'KILLED'
    })
  }
}
