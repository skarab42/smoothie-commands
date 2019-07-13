import CommandError from './CommandError.js'
import { NOT_CURRENTLY_PLAYING_ERROR } from './types.js'

export default class NotCurrentlyPlayingError extends CommandError {
  constructor () {
    super({
      type: NOT_CURRENTLY_PLAYING_ERROR,
      message: 'Not currently playing'
    })
  }
}
