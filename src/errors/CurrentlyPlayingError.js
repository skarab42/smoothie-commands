import CommandError from './CommandError.js'
import { CURRENTLY_PLAYING_ERROR } from '../error-types.js'

export default class CurrentlyPlayingError extends CommandError {
  constructor () {
    super({
      name: 'CurrentlyPlayingError',
      type: CURRENTLY_PLAYING_ERROR,
      message: 'Currently printing, suspend or abord first.'
    })
  }
}
