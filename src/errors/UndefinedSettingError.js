import CommandError from './CommandError.js'
import { UNDEFINED_SETTING_ERROR } from '../error-types.js'

export default class UndefinedSettingError extends CommandError {
  constructor (setting, usage) {
    super({
      name: 'UndefinedSettingError',
      type: UNDEFINED_SETTING_ERROR,
      message: `Undefined setting [${setting}].\nUsage: ${usage}`
    })
  }
}
