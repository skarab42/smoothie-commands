import CommandError from './CommandError.js'
import { COULD_NOT_DELETE_ERROR } from './types.js'

export default class CouldNotDeleteError extends CommandError {
  constructor (what) {
    super({
      type: COULD_NOT_DELETE_ERROR,
      message: `Could not delete [${what}].`
    })
  }
}
