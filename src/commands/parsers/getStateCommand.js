// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L870
import { UNKNOWN_RESPONSE_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'get state'
const usage = 'get state'
const description = 'Get state'

function parse ({ args, response }) {
  try {
    let state = response.trim().slice(1, -1).split(' ')
    return {
      modal: state[0],
      wcs: state[1],
      planeSelection: state[2],
      unit: state[3],
      distanceMode: state[4],
      pathControl: state[5],
      programPause: state[6],
      stopTool: state[7],
      stopCoolant: state[8],
      tool: state[9],
      feedRate: state[10],
      sValue: state[11]
    }
  } catch (error) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
}

export const getStateCommand = {
  command,
  usage,
  description,
  parse
}
