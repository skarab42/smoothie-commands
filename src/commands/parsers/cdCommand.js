// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L375
import UnknownResponseError from '../errors/UnknownResponseError.js'
import CouldNotOpenError from '../errors/CouldNotOpenError.js'

const command = 'cd'
const usage = 'cd <path>'
const description = 'Change current absolute path to provided path'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Could not open directory')) {
    throw new CouldNotOpenError(args[0] || null)
  }
  if (response !== '') {
    throw new UnknownResponseError(usage)
  }
  // always return data object
  return { cwd: args[0] }
}

export const cdCommand = {
  command,
  usage,
  description,
  parse
}
