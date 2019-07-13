// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L652
import UnknownResponseError from '../errors/UnknownResponseError.js'

const command = 'version'
const usage = 'version'
const description = 'Get firmware version'

// version pattern
const versionPattern = /Build version: ([^,]+), Build date: ([^,]+), MCU: ([^,]+), System Clock: ([^\n]+)\n?(([0-5]) axis)?/m

function parse ({ args, response }) {
  // test the pattern
  const matches = response.match(versionPattern)
  // throw an error if something goes wrong
  if (!matches) {
    throw new UnknownResponseError(usage)
  }
  // split branch-hash on dash
  const branch = matches[1].split('-')
  // set some data
  let data = {
    branch: branch[0].trim(),
    hash: branch[1].trim(),
    date: matches[2].trim(),
    mcu: matches[3].trim(),
    clock: matches[4].trim()
  }
  // axis ?
  if (matches[5]) {
    data.axis = parseInt(matches[6])
  }
  // always return an object
  return data
}

export const versionCommand = {
  command,
  usage,
  description,
  parse
}
