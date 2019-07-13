// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L281
// https://github.com/Smoothieware/Smoothieware/blob/0faa088fe1a2207f6c0b99ec7abccfbd1162f730/src/modules/utils/configurator/Configurator.cpp#L106
import { UNKNOWN_RESPONSE_ERROR, FILE_NOT_FOUND_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'load'
const usage = 'load <file>'
const description = 'Load config values from the specified file'

function parse ({ args, response }) {
  let lines = response.split('\n')
  let header = lines.shift()
  let footer = lines.pop()
  let configText = lines.join('\n').trim()
  // throw an error if something goes wrong
  if (response.startsWith('File not found: ')) {
    throw new CommandError({
      type: FILE_NOT_FOUND_ERROR,
      message: response
    })
  }
  if (
    !header.startsWith('Loading config override file: ') ||
    !footer.startsWith('config override file executed')
  ) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  // parse...
  let config = []
  let description = []
  lines.forEach(line => {
    line = line.trim()
    if (line.startsWith(';')) {
      description.push(line.slice(1).trim().replace(/:$/, ''))
    } else {
      config.push({
        gcode: line,
        description: description.join('\n')
      })
      description = []
    }
  })
  // create data object
  let data = { file: header.slice(30, -3), configText, config }
  // always return data object
  return data
}

export const loadCommand = {
  command,
  usage,
  description,
  parse
}
