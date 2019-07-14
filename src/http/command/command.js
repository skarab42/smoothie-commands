import UnsupportedCommandError from '../../errors/UnsupportedCommandError.js'
import RequestError from '../../errors/RequestError.js'
import responseFactory from '../request/responseFactory.js'
import post from '../request/post.js'
import use from '../../commands/use.js'
import parse from '../../commands/parse.js'
import upload from './upload.js'

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

  // upload command
  if (command === 'upload') {
    return upload({
      ...params,
      name: args[0] || undefined,
      file: args[1] || undefined,
      path: args[2] || undefined
    })
  }

  // END SPECIALS CASES ---------------

  // sent the request
  return post(params).then(response => {
    try {
      response.text = response.text.trim()
      if (response.text.startsWith('error:Unsupported command')) {
        throw new UnsupportedCommandError(command)
      }
      response.data = parse({ command, args, response: response.text.trim() })
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
