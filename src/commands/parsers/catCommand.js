// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L396
import { FILE_NOT_FOUND_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'cat'
const usage = 'cat <file> [limit]'
const description = 'Output the contents of a file'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('File not found')) {
    throw new CommandError({
      type: FILE_NOT_FOUND_ERROR,
      message: response
    })
  }
  // create data object
  let data = {
    contents: response
  }
  // always return data object
  return data
}

export const catCommand = {
  command,
  usage,
  description,
  parse
}
