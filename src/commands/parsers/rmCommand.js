// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L348
import CouldNotDeleteError from '../../errors/CouldNotDeleteError.js'

const command = 'rm'
const usage = 'rm <file>'
const description = 'Remove a file or an empty folder'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Could not delete')) {
    throw new CouldNotDeleteError(args[0] || null)
  }
  // always return data object
  return { path: args[0] }
}

export const rmCommand = {
  command,
  usage,
  description,
  parse
}
