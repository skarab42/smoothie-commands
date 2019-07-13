// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L957
import UnknownResponseError from '../errors/UnknownResponseError.js'
import UnknownDeviceError from '../errors/UnknownDeviceError.js'

const command = 'switch'
const usage = 'switch <name> [onf|off]'
const description = 'Set or get switch state for a named switch'

function parse ({ args, response }) {
  if (
    response.startsWith('unknown switch') ||
    response.endsWith('is not a known switch device')
  ) {
    throw new UnknownDeviceError(args[0] || null)
  }
  const matches = response.match(/switch (.*) (?:is|set to:) (.*)/)
  if (!matches || response.startsWith('must be')) {
    throw new UnknownResponseError(usage)
  }
  let value = matches[2]
  if (matches[2] === '0') {
    value = 'off'
  } else if (matches[2] === '1') {
    value = 'on'
  }
  // allaways return data object
  return { name: matches[1], value }
}

export const switchCommand = {
  command,
  usage,
  description,
  parse
}
