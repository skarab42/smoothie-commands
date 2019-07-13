// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L277
// https://github.com/Smoothieware/Smoothieware/blob/0faa088fe1a2207f6c0b99ec7abccfbd1162f730/src/modules/utils/configurator/Configurator.cpp#L68
import {
  UNKNOWN_RESPONSE_ERROR,
  UNDEFINED_SETTING_ERROR,
  NOT_ENOUGH_SPACE_ERROR
} from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'config-set'
const usage = 'config-set <source> <setting> <value>'
const description = 'Set value to the specified source setting'

function parse ({ args, response }) {
  let source = args[0]
  let setting = args[1]
  // let value = args[2]
  // throw an error if something goes wrong
  if (response.endsWith('source does not exist')) {
    throw new CommandError({
      type: UNDEFINED_SETTING_ERROR,
      message: `Undefined source [ ${source} ], allowed: [local|sd|cache]`
    })
  }
  if (response.startsWith('Usage:')) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  if (response.endsWith('not enough space to overwrite existing key/value')) {
    throw new CommandError({
      type: NOT_ENOUGH_SPACE_ERROR,
      message: `Not enough space to overwrite [ ${source}:${setting} ]`
    })
  }
  // parse response
  let matches = response.match(/([^:]+): ([^ ]+) has been set to (.+)/)
  if (!matches) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  // create data object
  let data = { source, setting, value: matches[3] }
  // always return data object
  return data
}

export const configSetCommand = {
  command,
  usage,
  description,
  parse
}
