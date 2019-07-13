import { UNKNOWN_RESPONSE_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'thermistors'
const usage = 'thermistors'
const description = 'Get predefined thermistors'

function parse ({ args, response }) {
  if (!response.startsWith('S/H table')) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  let lines = response.split('\n')
  lines.shift()
  let table = []
  let beta = []
  let pointer = table
  lines.forEach(line => {
    if (line.startsWith('Beta table')) {
      pointer = beta
      return
    }
    let parts = line.split('-')
    pointer.push({ id: parseInt(parts[0].trim()), name: parts[1].trim() })
  })
  // always return data object
  return { table, beta }
}

export const thermistorsCommand = {
  command,
  usage,
  description,
  parse
}
