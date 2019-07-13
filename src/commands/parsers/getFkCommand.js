// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L809
import UnknownResponseError from '../errors/UnknownResponseError.js'

const command = 'get fk'
const usage = 'get fk [-m] x[,y,z]'
const description = 'Do forward kinematics on the given actuator position and display the cartesian coordinates'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('error:usage:')) {
    throw new UnknownResponseError(usage)
  }
  // test
  const matches = response.match(/X ([0-9.]+), Y ([0-9.]+), Z ([0-9.]+)/)
  if (!matches) {
    throw new UnknownResponseError(usage)
  }
  // always return data object
  return {
    move: typeof args[0] === 'string' && !!args[0].match(/-m/i),
    x: parseFloat(matches[1]),
    y: parseFloat(matches[2]),
    z: parseFloat(matches[3])
  }
}

export const getFkCommand = {
  command,
  usage,
  description,
  parse
}
