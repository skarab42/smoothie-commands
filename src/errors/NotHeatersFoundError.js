import CommandError from './CommandError.js'
import { NO_HEATERS_FOUND_ERROR } from '../error-types.js'

export default class NotHeatersFoundError extends CommandError {
  constructor () {
    super({
      name: 'NotHeatersFoundError',
      type: NO_HEATERS_FOUND_ERROR,
      message: 'No heaters found.'
    })
  }
}
