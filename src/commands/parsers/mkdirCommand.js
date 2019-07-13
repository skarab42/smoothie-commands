import CouldNotCreateError from '../errors/CouldNotCreateError.js'

const command = 'mkdir'
const usage = 'mkdir <path>'
const description = 'Create new directory'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('could not create')) {
    throw new CouldNotCreateError(args[0] || null)
  }
  // always return data object
  return { path: args[0] }
}

export const mkdirCommand = {
  command,
  usage,
  description,
  parse
}
