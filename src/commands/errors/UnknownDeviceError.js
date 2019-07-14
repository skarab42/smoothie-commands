import CommandError from './CommandError.js'
import { UNKNOWN_DEVICE_ERROR } from '../error-types.js'

export default class UnknownDeviceError extends CommandError {
  constructor (device) {
    super({
      type: UNKNOWN_DEVICE_ERROR,
      message: `Unknown device [${device}].`
    })
  }
}
