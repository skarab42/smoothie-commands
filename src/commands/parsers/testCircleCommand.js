// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L1063
import { INVALID_PARAMETER_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'test circle'
const usage = 'test circle <radius> <iterations> [feedrate]'
const description = 'Draws a circle around origin'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('error:')) {
    throw new CommandError({
      type: INVALID_PARAMETER_ERROR,
      message: `Invalid parameter\nUsage: ${usage}`
    })
  }
  // always return data object
  return { gcode: response.split('\n').slice(0, -1) }
}

export const testCircleCommand = {
  command,
  usage,
  description,
  parse
}
