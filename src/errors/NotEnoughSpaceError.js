import CommandError from './CommandError.js'
import { NOT_ENOUGH_SPACE_ERROR } from '../error-types.js'

export default class NotEnoughSpaceError extends CommandError {
  constructor (what) {
    super({
      name: 'NotEnoughSpaceError',
      type: NOT_ENOUGH_SPACE_ERROR,
      message: `Not enough space to overwrite [${what}].`
    })
  }
}
