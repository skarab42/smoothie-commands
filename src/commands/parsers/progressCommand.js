// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L283
// https://github.com/Smoothieware/Smoothieware/blob/489e577025b6df397ed8d3aa0707ff25e3dd1a97/src/modules/utils/player/Player.cpp#L325
import NotCurrentlyPlayingError from '../errors/NotCurrentlyPlayingError.js'
import UnknownFileSizeError from '../errors/UnknownFileSizeError.js'
import UnknownResponseError from '../errors/UnknownResponseError.js'

const command = 'progress'
const usage = 'progress [-b]'
const description = 'Get SD or File playing progression'

const printingPattern = /SD printing byte ([0-9]+)\/([0-9]+)/
const pausedPattern = /SD print is paused at ([0-9]+)\/([0-9]+)/
const filePattern = /file: ([^,]+), ([0-9]+) % complete, elapsed time: ([0-9:]+)(, est time: ([0-9:]+))?/

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Not currently playing')) {
    throw new NotCurrentlyPlayingError()
  }
  if (response.startsWith('File size is unknown')) {
    throw new UnknownFileSizeError()
  }
  // SD printing
  const printingMatches = response.match(printingPattern)
  if (printingMatches) {
    const loaded = parseInt(printingMatches[1])
    const total = parseInt(printingMatches[2])
    return { loaded, total, percent: Math.round(loaded * 100 / total) }
  }
  // SD paused
  const pausedMatches = response.match(pausedPattern)
  if (pausedMatches) {
    const loaded = parseInt(pausedMatches[1])
    const total = parseInt(pausedMatches[2])
    return { loaded, total }
  }
  // File progress
  const fileMatches = response.match(filePattern)
  if (fileMatches) {
    const file = fileMatches[1]
    const percent = parseInt(fileMatches[2])
    const elapsedTime = fileMatches[3]
    const estimatedTime = fileMatches[5] || Infinity
    return { file, percent, elapsedTime, estimatedTime }
  }
  // throw an error if something goes wrong
  throw new UnknownResponseError(usage)
}

export const progressCommand = {
  command,
  usage,
  description,
  parse
}
