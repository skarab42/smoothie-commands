// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L283
// https://github.com/Smoothieware/Smoothieware/blob/489e577025b6df397ed8d3aa0707ff25e3dd1a97/src/modules/utils/player/Player.cpp#L277
import {
  UNKNOWN_RESPONSE_ERROR,
  CURRENTLY_PLAYING_ERROR,
  FILE_NOT_FOUND_ERROR
} from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'play'
const usage = 'play <file>'
const description = 'Play file from SD card'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Currently printing')) {
    throw new CommandError({
      type: CURRENTLY_PLAYING_ERROR,
      message: response
    })
  }
  if (response.startsWith('File not found')) {
    throw new CommandError({
      type: FILE_NOT_FOUND_ERROR,
      message: response
    })
  }
  if (!response.startsWith('Playing')) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  // file and size
  const file = args[0]
  const matches = response.match(/File size ([0-9]+)/)
  const size = parseInt(matches[1] || -1)
  // create data object
  let data = {
    message: response,
    file,
    size
  }
  // always return data object
  return data
}

export const playCommand = {
  command,
  usage,
  description,
  parse
}
