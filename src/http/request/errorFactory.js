import RequestError from '../../errors/RequestError.js'
import responseFactory from './responseFactory.js'

export default function errorFactory ({ type, message, params, xhr }) {
  return new RequestError({ type, message, response: responseFactory({ params, xhr }) })
}
