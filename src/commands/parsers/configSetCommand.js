// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L277
// https://github.com/Smoothieware/Smoothieware/blob/0faa088fe1a2207f6c0b99ec7abccfbd1162f730/src/modules/utils/configurator/Configurator.cpp#L68
import UnknownResponseError from '../errors/UnknownResponseError.js'
import UndefinedSettingError from '../errors/UndefinedSettingError.js'
import NotEnoughSpaceError from '../errors/NotEnoughSpaceError.js'

const command = 'config-set'
const usage = 'config-set <source> <setting> <value>'
const description = 'Set value to the specified source setting'

function parse ({ args, response }) {
  let source = args[0]
  let setting = args[1]
  // let value = args[2]
  // throw an error if something goes wrong
  if (response.startsWith('Usage:')) {
    throw new UnknownResponseError(usage)
  }
  if (response.endsWith('source does not exist')) {
    throw new UndefinedSettingError(source, usage)
  }
  if (response.endsWith('not enough space')) {
    throw new NotEnoughSpaceError(`${source}:${setting}`)
  }
  // parse response
  let matches = response.match(/([^:]+): ([^ ]+) has been set to (.+)/)
  if (!matches) {
    throw new UnknownResponseError(usage)
  }
  // always return data object
  return { source, setting, value: matches[3] }
}

export const configSetCommand = {
  command,
  usage,
  description,
  parse
}
