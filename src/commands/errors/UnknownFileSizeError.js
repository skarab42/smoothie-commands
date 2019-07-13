import CommandError from './CommandError.js'
import { UNKNOWN_FILE_SIZE_ERROR } from './types.js'

export default class UnknownFileSizeError extends CommandError {
  constructor () {
    super({
      type: UNKNOWN_FILE_SIZE_ERROR,
      message: 'Unknown file size.'
    })
  }
}
