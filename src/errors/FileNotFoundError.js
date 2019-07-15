import CommandError from './CommandError.js'
import { FILE_NOT_FOUND_ERROR } from '../error-types.js'

export default class FileNotFoundError extends CommandError {
  constructor (file) {
    super({
      name: 'FileNotFoundError',
      type: FILE_NOT_FOUND_ERROR,
      message: `File not found [${file}].`
    })
  }
}
