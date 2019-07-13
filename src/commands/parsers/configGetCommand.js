// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L275
// https://github.com/Smoothieware/Smoothieware/blob/0faa088fe1a2207f6c0b99ec7abccfbd1162f730/src/modules/utils/configurator/Configurator.cpp#L30
import { UNKNOWN_RESPONSE_ERROR, UNDEFINED_SETTING_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'config-get'
const usage = 'config-get [local|sd|cache] <setting>'
const description = 'Get config setting value from the specified source'

function parse ({ args, response }) {
  let setting = args[0]
  let source = 'cache'
  if (args.length > 1) {
    setting = args[1]
    source = args[0]
  }
  // throw an error if something goes wrong
  if (!response.length) {
    throw new CommandError({
      type: UNDEFINED_SETTING_ERROR,
      message: `Undefined source [ ${source} ], allowed: [local|sd|cache]`
    })
  }
  if (response.endsWith('is not in config')) {
    throw new CommandError({
      type: UNDEFINED_SETTING_ERROR,
      message: `Undefined setting [ ${source}:${setting} ]`
    })
  }
  // parse response
  let matches = response.match(/([^:]+): ([^ ]+) is set to (.+)/)
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

export const configGetCommand = {
  command,
  usage,
  description,
  parse
}
