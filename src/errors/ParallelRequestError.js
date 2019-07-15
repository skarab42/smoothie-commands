import RequestError from './RequestError.js'
import { PARALLEL_REQUEST_ERROR } from '../error-types.js'

export default class ParallelRequestError extends RequestError {
  constructor ({ response }) {
    super({
      response,
      name: 'ParallelRequestError',
      type: PARALLEL_REQUEST_ERROR,
      message: 'Parallel request prohibited. Please wait for the end of a request before sending another.'
    })
  }
}
