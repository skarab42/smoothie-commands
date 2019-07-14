// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L283
// https://github.com/Smoothieware/Smoothieware/blob/489e577025b6df397ed8d3aa0707ff25e3dd1a97/src/modules/utils/player/Player.cpp#L277
import CurrentlyPlayingError from '../../errors/CurrentlyPlayingError.js'
import UnknownResponseError from '../../errors/UnknownResponseError.js'
import FileNotFoundError from '../../errors/FileNotFoundError.js'

const command = 'play'
const usage = 'play <file>'
const description = 'Play file from SD card'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Currently printing')) {
    throw new CurrentlyPlayingError()
  }
  if (response.startsWith('File not found')) {
    throw new FileNotFoundError(args[0] || null)
  }
  if (!response.startsWith('Playing')) {
    throw new UnknownResponseError(usage)
  }
  // file and size
  const file = args[0]
  const matches = response.match(/File size ([0-9]+)/)
  const size = parseInt(matches[1] || -1)
  // always return data object
  return {
    message: response,
    file,
    size
  }
}

export const playCommand = {
  command,
  usage,
  description,
  parse
}
