// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L281
// https://github.com/Smoothieware/Smoothieware/blob/0faa088fe1a2207f6c0b99ec7abccfbd1162f730/src/modules/utils/configurator/Configurator.cpp#L106
import UnknownResponseError from '../../errors/UnknownResponseError.js'
import FileNotFoundError from '../../errors/FileNotFoundError.js'

const command = 'load'
const usage = 'load <file>'
const description = 'Load config values from the specified file'

function parseResponse (response) {
  let lines = response.split('\n')
  let header = lines.shift()
  lines.pop() // footer
  let config = []
  let description = []
  let configText = lines.join('\n').trim()
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

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('File not found: ')) {
    throw new FileNotFoundError(args[0] || null)
  }
  // parse...
  try {
    return parseResponse(response)
  } catch (error) {
    throw new UnknownResponseError(usage, error)
  }
}

export const loadCommand = {
  command,
  usage,
  description,
  parse
}
