// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L783
import {
  UNKNOWN_RESPONSE_ERROR,
  NO_HEATERS_FOUND_ERROR,
  UNKNOWN_DEVICE_ERROR
} from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'get temp'
const usage = 'get temp [device]'
const description = 'Get temperature for a device'

function parseTemp (line) {
  // single: bed temp: inf/0.000000 @0
  // all: T (57988) temp: inf/0.000000 @0
  let matches = line.match(/([^ ]+) (\(([0-9]+)\))? ?temp: (inf|[0-9.]+)\/(inf|[0-9.]+) @([0-9]+)/)
  if (!matches) {
    throw new Error('Unknown heater fingerprint')
  }
  let temp = {
    currentTemp: matches[4] === 'inf' ? Infinity : parseFloat(matches[4]),
    targetTemp: matches[5] === 'inf' ? Infinity : parseFloat(matches[5]),
    pwm: parseInt(matches[6])
  }
  // all
  if (matches[3]) {
    temp.id = parseInt(matches[3])
    temp.designator = matches[1]
  } else {
    temp.name = matches[1]
  }
  return temp
}

function parse ({ args, response }) {
  if (response.startsWith('no heaters found')) {
    throw new CommandError({
      type: NO_HEATERS_FOUND_ERROR,
      message: 'No heaters found'
    })
  }
  if (response.endsWith('is not a known temperature device')) {
    throw new CommandError({
      type: UNKNOWN_DEVICE_ERROR,
      message: `Unknown device [ ${name} ]`
    })
  }
  // set data
  try {
    let data = {}
    if (name === 'all') {
      data.devices = response.split('\n').map(parseTemp)
    } else {
      data = parseTemp(response)
    }
    return data
  } catch (error) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
}

export const getTempCommand = {
  command,
  usage,
  description,
  parse
}
