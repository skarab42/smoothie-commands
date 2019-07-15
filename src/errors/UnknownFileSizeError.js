import CommandError from './CommandError.js'
import { UNKNOWN_FILE_SIZE_ERROR } from '../error-types.js'

export default class UnknownFileSizeError extends CommandError {
  constructor () {
    super({
      name: 'UnknownFileSizeError',
      type: UNKNOWN_FILE_SIZE_ERROR,
      message: 'Unknown file size.'
    })
  }
}
