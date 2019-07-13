// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L911
import UnknownResponseError from '../errors/UnknownResponseError.js'

const command = 'thermistors'
const usage = 'thermistors'
const description = 'Get predefined thermistors'

function parseResponse (response) {
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
  return { table, beta }
}

function parse ({ args, response }) {
  try {
    return parseResponse(response)
  } catch (error) {
    throw new UnknownResponseError(usage, error)
  }
}

export const thermistorsCommand = {
  command,
  usage,
  description,
  parse
}
