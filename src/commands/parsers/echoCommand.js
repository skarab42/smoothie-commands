// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L460
const command = 'echo'
const usage = 'echo <arg1> [<arg2>]'
const description = 'Command description...'

function parse ({ args, response }) {
  // create data object
  let data = { message: response }
  // always return data object
  return data
}

export const echoCommand = {
  command,
  usage,
  description,
  parse
}
