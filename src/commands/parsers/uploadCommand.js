// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L466
// https://github.com/Smoothieware/Smoothieware/blob/d82d66f550ce6bdd7f33e8f4998ac6d963fd7376/src/libs/Network/uip/webserver/httpd.c#L340
import CouldNotUploadError from '../errors/CouldNotUploadError.js'
import fileFactory from '../fileFactory.js'

const command = 'upload'
const usage = 'upload <file>'
const description = 'Saves a stream of text to the named file'

function parse ({ args, response }) {
  const name = args[0]
  const file = args[1]
  const path = args[2]
  if (!response.startsWith('OK')) {
    throw new CouldNotUploadError(`${path}/${file}`)
  }
  return fileFactory({ path, line: `${name} ${file.size}`, getSize: true })
}

export const uploadCommand = {
  command,
  usage,
  description,
  parse
}
