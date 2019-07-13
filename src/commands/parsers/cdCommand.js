// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L375
import { UNKNOWN_RESPONSE_ERROR, DIRECTORY_NOT_FOUND_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'cd'
const usage = 'cd <path>'
const description = 'Change current absolute path to provided path'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Could not open directory')) {
    throw new CommandError({
      type: DIRECTORY_NOT_FOUND_ERROR,
      message: response
    })
  }
  if (response !== '') {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  // create data object
  let data = {
    cwd: args[0]
  }
  // always return data object
  return data
}

export const cdCommand = {
  command,
  usage,
  description,
  parse
}
