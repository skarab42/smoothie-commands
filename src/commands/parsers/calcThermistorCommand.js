// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L918
import { UNKNOWN_RESPONSE_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'calc_thermistor'
const usage = 'calc_thermistor <T1,R1,T2,R2,T3,R3>'
const description = 'Calculate the Steinhart Hart coefficients'

const coefficientsPattern = /Steinhart Hart coefficients: {2}I([0-9.]+) J([0-9.]+) K([0-9.]+)/
const savedPattern = /Setting Thermistor/

function parse ({ args, response }) {
  console.log('parse:', { command, args, response })
  // throw an error if something goes wrong
  if (response.startsWith('Usage:')) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  // test pattern
  const matches = response.match(coefficientsPattern)
  if (!matches) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  // create data object
  let data = {
    I: matches[1],
    J: matches[2],
    K: matches[3],
    saved: !!response.match(savedPattern)
  }
  // always return data object
  return data
}

export const calcThermistorCommand = {
  command,
  usage,
  description,
  parse
}
