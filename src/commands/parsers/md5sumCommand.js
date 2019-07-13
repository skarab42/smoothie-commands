// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L1009
import FileNotFoundError from '../errors/FileNotFoundError.js'

const command = 'md5sum'
const usage = 'md5sum <file>'
const description = 'Get the md5 sum for a file'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('File not found:')) {
    throw new FileNotFoundError(args[0] || null)
  }
  // always return data object
  const parts = response.split(' ')
  return { file: args[0], hash: parts[0] }
}

export const md5sumCommand = {
  command,
  usage,
  description,
  parse
}
