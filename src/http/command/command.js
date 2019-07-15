import UnsupportedCommandError from '../../errors/UnsupportedCommandError.js'
import RequestError from '../../errors/RequestError.js'
import responseFactory from '../request/responseFactory.js'
import post from '../request/post.js'
import use from '../../commands/use.js'
import parse from '../../commands/parse.js'
import upload from './upload.js'
import cat from './cat.js'

export { use }

export default function command ({ address, command, args = [], ...rest } = {}) {
  const argsString = args.length ? ` ${args.join(' ')}` : ''
  const params = {
    ...rest,
    address,
    command,
    args,
    url: `http://${address}/command`,
    data: `${command}${argsString}\n`
  }

  // SPECIALS CASES ---------------------

  // break command
  if (command === 'break') {
    // break is immediate and never return
    post(params) // send break command, and return a fake response
    let response = responseFactory({ params, xhr: new XMLHttpRequest() })
    return Promise.resolve({ ...response, data: { message: 'Entering MRI debug mode...' } })
  }

  // cat command
  if (command === 'cat') {
    // cat is very slow while a simple GET request is super fast
    return cat({ ...params, file: args[0] || undefined })
  }

  // upload command
  if (command === 'upload') {
    let path = args[0] || undefined
    let name = args[1] || undefined
    let file = args[2] || undefined
    let slice = 3
    if (args.length === 2) {
      file = name
      name = path
      path = undefined
      slice = 2
    }
    if (typeof file === 'string') {
      file = args.slice(slice).join(' ')
    }
    return upload({ ...params, name, file, path })
  }

  // END SPECIALS CASES ---------------

  // sent the request
  return post(params).then(response => {
    try {
      response.text = response.text.trim()
      if (response.text.startsWith('error:Unsupported command')) {
        throw new UnsupportedCommandError(command)
      }
      response.data = parse({ command, args, response: response.text })
    } catch (error) {
      if (error.type === 'UNSUPPORTED_PARSER_ERROR') {
        const ok = response.text.toLowerCase() === 'ok'
        response.data = ok ? { ok: true } : response.text
        return response
      }
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
