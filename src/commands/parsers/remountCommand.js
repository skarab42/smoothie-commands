// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L341
const command = 'remount'
const usage = 'remount'
const description = 'Remount SD card'

function parse ({ args, response }) {
  return { message: response }
}

export const remountCommand = {
  command,
  usage,
  description,
  parse
}
