// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L1009
import { FILE_NOT_FOUND_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'md5sum'
const usage = 'md5sum <file>'
const description = 'Get the md5 sum for a file'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('File not found:')) {
    throw new CommandError({
      type: FILE_NOT_FOUND_ERROR,
      message: response
    })
  }
  // create data object
  let parts = response.split(' ')
  let data = { file: args[0], hash: parts[0] }
  // always return data object
  return data
}

export const md5sumCommand = {
  command,
  usage,
  description,
  parse
}
