import { COULD_NOT_RENAME_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'mv'
const usage = 'mv <source> <target>'
const description = 'Move a file from source to target path'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Could not rename')) {
    throw new CommandError({
      type: COULD_NOT_RENAME_ERROR,
      message: response
    })
  }
  // create and return data object
  return { source: args[0], target: args[1] }
}

export const mvCommand = {
  command,
  usage,
  description,
  parse
}
