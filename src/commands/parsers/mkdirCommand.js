import { COULD_NOT_CREATE_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'mkdir'
const usage = 'mkdir <path>'
const description = 'Create new directory'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('could not create')) {
    throw new CommandError({
      type: COULD_NOT_CREATE_ERROR,
      message: response
    })
  }
  // create data object
  let data = { path: args[0] }
  // always return data object
  return data
}

export const mkdirCommand = {
  command,
  usage,
  description,
  parse
}
