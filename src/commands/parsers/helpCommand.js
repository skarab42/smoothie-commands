// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L1267
import UnknownResponseError from '../errors/UnknownResponseError.js'

const command = 'help'
const usage = 'help'
const description = 'Get some help'

function parseLine (line) {
  const parts = line.split(' - ').map(p => p.trim())
  return { command: parts[0], description: parts[1] || '' }
}

function parse ({ args, response }) {
  try {
    return { help: response.split('\n').slice(1).map(parseLine) }
  } catch (error) {
    throw new UnknownResponseError(usage, error)
  }
}

export const helpCommand = {
  command,
  usage,
  description,
  parse
}
