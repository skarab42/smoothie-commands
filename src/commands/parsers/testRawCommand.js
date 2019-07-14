// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L1146
import InvalidArgumentsError from '../../errors/InvalidArgumentsError.js'

const command = 'test raw'
const usage = 'test raw <axis> <steps> <speed>'
const description = 'Issues raw steps to the specified axis'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('error:')) {
    throw new InvalidArgumentsError(args, usage)
  }
  // always return data object
  return {
    axis: args[0],
    steps: parseInt(args[1]),
    speed: parseInt(args[2])
  }
}

export const testRawCommand = {
  command,
  usage,
  description,
  parse
}
