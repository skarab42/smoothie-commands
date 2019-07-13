// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L897
import { UNKNOWN_DEVICE_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'set_temp'
const usage = 'set_temp <device> <temp>'
const description = 'Set device temperature'

function parse ({ args, response }) {
  if (response.endsWith('is not a known temperature device')) {
    throw new CommandError({
      type: UNKNOWN_DEVICE_ERROR,
      message: response
    })
  }
  // allaways return data object
  return { device: args[0], value: parseFloat(args[1]) }
}

export const setTempCommand = {
  command,
  usage,
  description,
  parse
}
