// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L1037
import InvalidArgumentsError from '../errors/InvalidArgumentsError.js'

const command = 'test jog'
const usage = 'test jog <axis> <distance> <iterations> [feedrate]'
const description = 'Jogs back and forth from origin'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('error:')) {
    throw new InvalidArgumentsError(args, usage)
  }
  // always return data object
  return { gcode: response.split('\n').slice(0, -1) }
}

export const testJogCommand = {
  command,
  usage,
  description,
  parse
}
