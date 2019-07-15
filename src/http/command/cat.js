import { catCommand } from '../../commands/parsers/catCommand.js'
import RequestError from '../../errors/RequestError.js'
import get from '../request/get.js'

export default function cat ({ address, file, ...rest } = {}) {
  // normalize path
  file = file.replace(/^\/|\/$/g, '')
  // set params
  const params = {
    ...rest,
    address,
    file,
    url: `http://${address}/${file}`
  }
  // get file
  return get(params).then(response => {
    try {
      response.data = catCommand.parse({
        command: 'cat',
        args: [file],
        response: response.text.trim()
      })
    } catch (error) {
      throw new RequestError({
        type: error.type || error.name,
        message: error.message,
        parentError: error,
        response
      })
    }
    return response
  })
}
