import CommandError from './CommandError.js'
import { COULD_NOT_MOVE_ERROR } from '../error-types.js'

export default class CouldNotMoveError extends CommandError {
  constructor (source, target) {
    super({
      type: COULD_NOT_MOVE_ERROR,
      message: `Could not move [${source}] to [${target}].`
    })
  }
}
