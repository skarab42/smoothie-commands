import { UNSUPPORTED_COMMAND_ERROR } from './error-types'
import { errorFactory, responseFactory } from '../request/factory'
import post from '../request/post'
import use from '../../commands/use'
import parse from '../../commands/parse'

export { use }

export default function command ({ address, command, args = [], ...rest } = {}) {
  const argsString = args.length ? ` ${args.join(' ')}` : ''
  const params = {
    ...rest,
    command,
    args,
    url: `http://${address}/command`,
    data: `${command}${argsString}\n`
  }
  if (command === 'break') {
    // break is immediate and never return
    post(params) // send break command, and return a fake response
    let response = responseFactory({ params, xhr: new XMLHttpRequest() })
    return Promise.resolve({ ...response, data: { message: 'Entering MRI debug mode...' } })
  }
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
