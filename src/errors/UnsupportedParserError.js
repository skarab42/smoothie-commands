import CommandError from './CommandError.js'
import { UNSUPPORTED_PARSER_ERROR } from '../error-types.js'

export default class UnsupportedParserError extends CommandError {
  constructor (command) {
    super({
      type: UNSUPPORTED_PARSER_ERROR,
      message: `The command parser for [${command}] is not yet supported.`
    })
  }
}
