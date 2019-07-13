// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L856
import { UNKNOWN_RESPONSE_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'get pos'
const usage = 'get pos'
const description = 'Get all the various M114 variants'

function parseLine (line) {
  let parts = line.toLowerCase().split(':')
  let key = parts.shift().replace(' ', '_')
  let coords = parts.join(':').trim().split(' ')
  let result = { key, coords: {} }
  coords.forEach(coord => {
    coord = coord.split(':')
    result.coords[coord[0]] = parseFloat(coord[1])
  })
  switch (key) {
    case 'last_c':
      result.command = 'M114'
      result.description = 'Position of all axes'
      break
    case 'realtime_wcs':
      result.command = 'M114.1'
      result.description = 'Real time position of all axes'
      break
    case 'mcs':
      result.command = 'M114.2'
      result.description = 'Real time machine position of all axes'
      break
    case 'apos':
      result.command = 'M114.3'
      result.description = 'Real time actuator position of all actuators'
      break
    case 'mp':
      result.command = 'M114.4'
      result.description = 'Last milestone'
      break
    case 'cmp':
      result.command = 'M114.5'
      result.description = 'Last machine position'
      break
    default:
      result.command = 'M114.?'
      result.description = 'Unknown type'
  }
  return result
}

function parse ({ args, response }) {
  try {
    return response.trim().split('\n').map(parseLine)
  } catch (error) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
}

export const getPosCommand = {
  command,
  usage,
  description,
  parse
}
