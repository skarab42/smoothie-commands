// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L283
// https://github.com/Smoothieware/Smoothieware/blob/489e577025b6df397ed8d3aa0707ff25e3dd1a97/src/modules/utils/player/Player.cpp#L615
import UnknownResponseError from '../errors/UnknownResponseError.js'
import NotSuspendedError from '../errors/NotSuspendedError.js'
import KillError from '../errors/KillError.js'

const command = 'resume'
const usage = 'resume'
const description = 'Resume the suspended print'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Not suspended')) {
    throw new NotSuspendedError()
  }
  if (response.match(/Resume aborted by kill/)) {
    throw new KillError()
  }
  if (!response.match(/Resuming print/)) {
    throw new UnknownResponseError(usage)
  }
  // always return data object
  return { logs: response.split('\n') }
}

export const resumeCommand = {
  command,
  usage,
  description,
  parse
}
