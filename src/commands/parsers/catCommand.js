// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L396
import FileNotFoundError from '../../errors/FileNotFoundError.js'

const command = 'cat'
const usage = 'cat <file> [limit]'
const description = 'Output the contents of a file'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('File not found')) {
    throw new FileNotFoundError(args[0] || null)
  }
  // always return data object
  return { contents: response }
}

export const catCommand = {
  command,
  usage,
  description,
  parse
}
