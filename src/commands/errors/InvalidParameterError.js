import CommandError from './CommandError.js'
import { INVALID_PARAMETER_ERROR } from './types.js'

export default class InvalidParameterError extends CommandError {
  constructor (parameter, usage) {
    super({
      type: INVALID_PARAMETER_ERROR,
      message: `Invalid parameter [${parameter}].\nUsage: ${usage}`
    })
  }
}
