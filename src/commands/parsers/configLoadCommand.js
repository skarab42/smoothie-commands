// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L281
// https://github.com/Smoothieware/Smoothieware/blob/0faa088fe1a2207f6c0b99ec7abccfbd1162f730/src/modules/utils/configurator/Configurator.cpp#L106
import { UNDEFINED_SETTING_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'config-load'
const usage = 'config-load <load|unload|dump|checksum>'
const description = 'Load config values from the specified source'

function parse ({ args, response }) {
  const option = args[0]
  // throw an error if something goes wrong
  if (response.startsWith('unsupported option:')) {
    throw new CommandError({
      type: UNDEFINED_SETTING_ERROR,
      message: `Invalid option [ ${option} ]`
    })
  }
  // create data object
  let data = {}
  if (option === 'dump') {
    data = { dump: response.split('\n') }
  } else if (option === 'checksum') {
    let parts = response.slice(11).split('=')
    data = {
      value: parts[0].trim(),
      checksum: parts[1].trim()
    }
  } else {
    data = { message: response }
  }
  // always return data object
  return data
}

export const configLoadCommand = {
  command,
  usage,
  description,
  parse
}
