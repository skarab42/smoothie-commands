// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L674
const command = 'reset'
const usage = 'reset'
const description = 'Reset the board'

function parse ({ args, response }) {
  return { message: response }
}

export const resetCommand = {
  command,
  usage,
  description,
  parse
}
