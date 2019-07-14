import RequestError from '../../errors/RequestError.js'

export function responseFactory ({ params, xhr }) {
  return { xhr, params, data: {}, text: xhr ? xhr.responseText : '' }
}

export function errorFactory ({ type, message, params, xhr }) {
  return new RequestError({ type, message, response: responseFactory({ params, xhr }) })
}
