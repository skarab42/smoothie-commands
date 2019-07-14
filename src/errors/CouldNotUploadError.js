import CommandError from './CommandError.js'
import { COULD_NOT_UPLOAD_ERROR } from '../error-types.js'

export default class CouldNotUploadError extends CommandError {
  constructor (what) {
    super({
      type: COULD_NOT_UPLOAD_ERROR,
      message: `Could not upload [${what}].`
    })
  }
}
