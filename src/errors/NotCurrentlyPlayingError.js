import CommandError from './CommandError.js'
import { NOT_CURRENTLY_PLAYING_ERROR } from '../error-types.js'

export default class NotCurrentlyPlayingError extends CommandError {
  constructor () {
    super({
      name: 'NotCurrentlyPlayingError',
      type: NOT_CURRENTLY_PLAYING_ERROR,
      message: 'Not currently playing.'
    })
  }
}
