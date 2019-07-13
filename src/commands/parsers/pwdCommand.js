const command = 'pwd'
const usage = 'pwd'
const description = 'Get (print) current working directory'

function parse ({ args, response }) {
  return { path: response }
}

export const pwdCommand = {
  command,
  usage,
  description,
  parse
}
