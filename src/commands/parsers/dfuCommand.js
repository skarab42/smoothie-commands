// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L681
import { UNKNOWN_RESPONSE_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'dfu'
const usage = 'dfu'
const description = 'Entering boot mode'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (!response.startsWith('Entering boot mode')) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  // create data object
  let data = { message: response }
  // always return data object
  return data
}

export const dfuCommand = {
  command,
  usage,
  description,
  parse
}
