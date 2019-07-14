import errorFactory from '../request/errorFactory.js'
import responseFactory from '../request/responseFactory.js'
import {
  UNSUPPORTED_COMMAND_ERROR,
  INVALID_PARAMETER_ERROR
} from '../../error-types.js'
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
  // SPECIALS CASES
  if (command === 'break') {
    // break is immediate and never return
    post(params) // send break command, and return a fake response
    let response = responseFactory({ params, xhr: new XMLHttpRequest() })
    return Promise.resolve({ ...response, data: { message: 'Entering MRI debug mode...' } })
  }
  if (command === 'upload') {
    const uploadParams = {
      ...params,
      name: args[0] || undefined,
      file: args[1] || undefined,
      path: args[2] || undefined
    }
    if (args.length < 2) {
      let response = responseFactory({ params: uploadParams, xhr: new XMLHttpRequest() })
      return Promise.reject(errorFactory({
        ...response,
        type: INVALID_PARAMETER_ERROR,
        message: `Invalid parameter\nUsage: upload <name> <file> [path]`
      }))
    }
    return upload(uploadParams)
  }
  // END SPECIALS CASES
  // sent the request
  return post(params).then(response => {
    response.text = response.text.trim()
    if (response.text.startsWith('error:Unsupported command')) {
      throw errorFactory({
        ...response,
        type: UNSUPPORTED_COMMAND_ERROR,
        message: `Unsupported command [ ${command} ]`
      })
    }
    try {
      response.data = parse({ command, args, response: response.text.trim() })
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
