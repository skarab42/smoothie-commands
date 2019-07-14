import CommandError from './CommandError.js'
import { NO_LASER_MODULE_ERROR } from '../error-types.js'

export default class NoLaserModuleError extends CommandError {
  constructor () {
    super({
      type: NO_LASER_MODULE_ERROR,
      message: 'No laser module, edit config file to enable.'
    })
  }
}
