// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L688
const command = 'break'
const usage = 'break'
const description = 'Enter in MRI mode'

function parse ({ args, response }) {
  // break is immediate and never return
  // handled by root command function
  // always return data object
  return {}
}

export const breakCommand = {
  command,
  usage,
  description,
  parse
}
