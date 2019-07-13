// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L809
import { UNKNOWN_RESPONSE_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'get ik'
const usage = 'get ik [-m] x[,y,z]'
const description = 'Do inverse kinematics on the given cartesian position and display the actuator coordinates'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('error:usage:')) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  // test
  const matches = response.match(/X ([0-9.]+), Y ([0-9.]+), Z ([0-9.]+)/)
  if (!matches) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  // create data object
  let data = {
    move: typeof args[0] === 'string' && !!args[0].match(/-m/i),
    x: parseFloat(matches[1]),
    y: parseFloat(matches[2]),
    z: parseFloat(matches[3])
  }
  // always return data object
  return data
}

export const getIkCommand = {
  command,
  usage,
  description,
  parse
}
