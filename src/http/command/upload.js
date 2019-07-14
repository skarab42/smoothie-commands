import { uploadCommand } from '../../commands/parsers/uploadCommand.js'
import { errorFactory } from '../request/factory.js'
import post from '../request/post.js'

export default function upload ({ address, file, name, path = '/sd', ...rest } = {}) {
  // file is a string, make a Blob
  if (typeof file === 'string') {
    // normalize line endding
    file = file.replace(/\r\n/g, '\n')
    // force EOF
    if (file[file.length - 1] !== '\n') {
      file += '\n'
    }
    // convert to Blob object
    file = new Blob([file], { 'type': 'text/plain' })
  }
  // normalize path
  name = name.replace(/^\/|\/$/g, '')
  path = path.replace(/^\/|\/$/g, '')
  let fileName = `/${path}/${name}`
  const parts = fileName.split('/')
  name = parts.pop()
  path = parts.join('/')
  fileName = fileName.replace(/^\/sd\//, '')
  // set params
  const params = {
    ...rest,
    address,
    file,
    name,
    path,
    headers: [[ 'X-Filename', fileName ]],
    url: `http://${address}/upload`,
    data: file
  }
  // post upload
  return post(params).then(response => {
    try {
      response.data = uploadCommand.parse({
        command: 'upload',
        args: [name, file, path],
        response: response.text.trim()
      })
    } catch (error) {
      throw errorFactory({
        ...response,
        type: error.type || error.name,
        message: error.message
      })
    }
    return response
  })
}
