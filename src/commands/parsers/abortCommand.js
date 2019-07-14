// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L283
// https://github.com/Smoothieware/Smoothieware/blob/489e577025b6df397ed8d3aa0707ff25e3dd1a97/src/modules/utils/player/Player.cpp#L369
import NotCurrentlyPlayingError from '../../errors/NotCurrentlyPlayingError.js'
import UnknownResponseError from '../../errors/UnknownResponseError.js'

const command = 'abort'
const usage = 'abort'
const description = 'Abort currently playing file'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Not currently playing')) {
    throw new NotCurrentlyPlayingError()
  }
  if (!response.startsWith('Aborted playing')) {
    throw new UnknownResponseError(usage)
  }
  // always return data object
  return { message: response }
}

export const abortCommand = {
  command,
  usage,
  description,
  parse
}
