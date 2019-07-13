import { UNKNOWN_RESPONSE_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'config-set'
const usage = 'config-set <arg1> [<arg2>]'
const description = 'Command description...'

function parse ({ args, response }) {
  console.log('parse:', { command, args, response })
  // throw an error if something goes wrong
  if (response === 42) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  // create data object
  let data = {}
  // always return data object
  return data
}

export const configSetCommand = {
  command,
  usage,
  description,
  parse
}
