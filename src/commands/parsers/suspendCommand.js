// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L283
// https://github.com/Smoothieware/Smoothieware/blob/489e577025b6df397ed8d3aa0707ff25e3dd1a97/src/modules/utils/player/Player.cpp#L517
import { UNKNOWN_RESPONSE_ERROR, ALREADY_SUSPENDED_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'suspend'
const usage = 'suspend'
const description = 'Suspend a print in progress'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Already suspended')) {
    throw new CommandError({
      type: ALREADY_SUSPENDED_ERROR,
      message: response
    })
  }
  if (!response.startsWith('// Suspending print')) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  // create data object
  let data = {
    message: response
  }
  // always return data object
  return data
}

export const suspendCommand = {
  command,
  usage,
  description,
  parse
}
