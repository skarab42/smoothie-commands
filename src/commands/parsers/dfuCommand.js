// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L681
import UnknownResponseError from '../../errors/UnknownResponseError.js'

const command = 'dfu'
const usage = 'dfu'
const description = 'Entering boot mode'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (!response.startsWith('Entering boot mode')) {
    throw new UnknownResponseError(usage)
  }
  // always return data object
  return { message: response }
}

export const dfuCommand = {
  command,
  usage,
  description,
  parse
}
