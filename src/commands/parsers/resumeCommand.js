// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L283
// https://github.com/Smoothieware/Smoothieware/blob/489e577025b6df397ed8d3aa0707ff25e3dd1a97/src/modules/utils/player/Player.cpp#L615
import { UNKNOWN_RESPONSE_ERROR, NOT_SUSPENDED_ERROR, KILL_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'resume'
const usage = 'resume'
const description = 'Resume the suspended print'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Not suspended')) {
    throw new CommandError({
      type: NOT_SUSPENDED_ERROR,
      message: response
    })
  }
  if (response.match(/Resume aborted by kill/)) {
    throw new CommandError({
      type: KILL_ERROR,
      message: response
    })
  }
  if (!response.match(/Resuming print/)) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
  // create data object
  let data = {
    logs: response.split('\n')
  }
  // always return data object
  return data
}

export const resumeCommand = {
  command,
  usage,
  description,
  parse
}
