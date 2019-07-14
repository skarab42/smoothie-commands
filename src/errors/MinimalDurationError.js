import CommandError from './CommandError.js'
import { MINIMAL_DURATION_ERROR } from '../error-types.js'

export default class MinimalDurationError extends CommandError {
  constructor (duration) {
    super({
      type: MINIMAL_DURATION_ERROR,
      message: `Minimal duration is ${duration}ms.`
    })
  }
}
