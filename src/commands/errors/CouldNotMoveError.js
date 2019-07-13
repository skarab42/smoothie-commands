import CommandError from './CommandError.js'
import { COULD_NOT_MOVE_ERROR } from './types.js'

export default class CouldNotMoveError extends CommandError {
  constructor (what) {
    super({
      type: COULD_NOT_MOVE_ERROR,
      message: `Could not move [${what}].`
    })
  }
}
