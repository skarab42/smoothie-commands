// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L460
const command = 'echo'
const usage = 'echo <message>'
const description = 'Echo echo echo...'

function parse ({ args, response }) {
  // always return data object
  return { message: response }
}

export const echoCommand = {
  command,
  usage,
  description,
  parse
}
