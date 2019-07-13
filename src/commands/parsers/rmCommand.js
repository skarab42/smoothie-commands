// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L348
import { COULD_NOT_DELETE_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'rm'
const usage = 'rm <file>'
const description = 'Remove a file or an empty folder'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Could not delete')) {
    throw new CommandError({
      type: COULD_NOT_DELETE_ERROR,
      message: response
    })
  }
  // create data object
  let data = { path: args[0] }
  // always return data object
  return data
}

export const rmCommand = {
  command,
  usage,
  description,
  parse
}
