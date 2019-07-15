import CommandError from './CommandError.js'
import { COULD_NOT_CREATE_ERROR } from '../error-types.js'

export default class CouldNotCreateError extends CommandError {
  constructor (what) {
    super({
      name: 'CouldNotCreateError',
      type: COULD_NOT_CREATE_ERROR,
      message: `Could not create [${what}].`
    })
  }
}
