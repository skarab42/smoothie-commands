// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L286
// https://github.com/Smoothieware/Smoothieware/blob/0faa088fe1a2207f6c0b99ec7abccfbd1162f730/src/modules/tools/laser/Laser.cpp#L136
import UnknownResponseError from '../errors/UnknownResponseError.js'
import MinimalDurationError from '../errors/MinimalDurationError.js'
import NoLaserModuleError from '../errors/NoLaserModuleError.js'

const command = 'fire'
const usage = 'fire <power|off|status> [duration]'
const description = 'Fire laser manualy'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Usage:')) {
    throw new UnknownResponseError(usage)
  }
  if (response === '') {
    throw new NoLaserModuleError()
  }
  let matches = response.match(/Minimal duration is ([0-9]+) ms/)
  if (matches) {
    throw new MinimalDurationError(matches[1])
  }
  // status
  matches = response.match(/laser manual state: (on|off)/)
  if (matches) {
    let on = matches[1] === 'on'
    return { status: matches[1], on, off: !on }
  }
  if (response.startsWith('turning laser off')) {
    return { power: 0, fire: false, status: 'off', on: false, off: true }
  }
  matches = response.match(/Firing laser at ([0-9.]+)% power(, for ([0-9]+) ms)?/)
  if (matches) {
    let power = parseFloat(matches[1])
    let duration = matches[2] ? parseFloat(matches[3]) : undefined
    return { power, duration, fire: true, status: 'on', on: true, off: false }
  }
  // nothing match...
  throw new UnknownResponseError(usage)
}

export const fireCommand = {
  command,
  usage,
  description,
  parse
}
