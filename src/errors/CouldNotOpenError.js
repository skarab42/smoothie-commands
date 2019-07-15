import CommandError from './CommandError.js'
import { COULD_NOT_OPEN_ERROR } from '../error-types.js'

export default class CouldNotOpenError extends CommandError {
  constructor (file) {
    super({
      name: 'CouldNotOpenError',
      type: COULD_NOT_OPEN_ERROR,
      message: `Could not open [${file}].`
    })
  }
}
