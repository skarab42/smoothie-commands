import RequestError from './RequestError.js'
import { SERVER_ERROR } from '../error-types.js'

export default class ServerError extends RequestError {
  constructor ({ status, response }) {
    super({
      response,
      type: SERVER_ERROR,
      message: `Server error [${status}].`
    })
  }
}
