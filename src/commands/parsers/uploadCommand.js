import { COULD_NOT_UPLOAD_ERROR } from '../error-types.js'
import fileFactory from '../fileFactory.js'
import CommandError from '../CommandError.js'

const command = 'upload'
const usage = 'upload <file>'
const description = 'Saves a stream of text to the named file'

function parse ({ args, response }) {
  const name = args[0]
  const file = args[1]
  const path = args[2]
  if (!response.startsWith('OK')) {
    throw new CommandError({
      type: COULD_NOT_UPLOAD_ERROR,
      message: `Could not upload file [ ${path}/${file} ]`
    })
  }
  return fileFactory({ path, line: `${name} ${file.size}`, getSize: true })
}

export const uploadCommand = {
  command,
  usage,
  description,
  parse
}
