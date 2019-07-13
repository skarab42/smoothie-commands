import CommandError from './CommandError.js'
import { COULD_NOT_CREATE_ERROR } from './types.js'

export default class CouldNotCreateError extends CommandError {
  constructor (what) {
    super({
      type: COULD_NOT_CREATE_ERROR,
      message: `Could not create [${what}].`
    })
  }
}
