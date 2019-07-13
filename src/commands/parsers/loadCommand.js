// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L281
// https://github.com/Smoothieware/Smoothieware/blob/0faa088fe1a2207f6c0b99ec7abccfbd1162f730/src/modules/utils/configurator/Configurator.cpp#L106
import UnknownResponseError from '../errors/UnknownResponseError.js'
import FileNotFoundError from '../errors/FileNotFoundError.js'

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
    throw new FileNotFoundError(args[0] || null)
  }
  if (
    !header.startsWith('Loading config override file: ') ||
    !footer.startsWith('config override file executed')
  ) {
    throw new UnknownResponseError(usage)
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
  // always return data object
  return { file: header.slice(30, -3), configText, config }
}

export const loadCommand = {
  command,
  usage,
  description,
  parse
}
