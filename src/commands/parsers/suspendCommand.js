// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L283
// https://github.com/Smoothieware/Smoothieware/blob/489e577025b6df397ed8d3aa0707ff25e3dd1a97/src/modules/utils/player/Player.cpp#L517
import AlreadySuspendedError from '../../errors/AlreadySuspendedError.js'
import UnknownResponseError from '../../errors/UnknownResponseError.js'

const command = 'suspend'
const usage = 'suspend'
const description = 'Suspend a print in progress'

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Already suspended')) {
    throw new AlreadySuspendedError()
  }
  if (!response.startsWith('// Suspending print')) {
    throw new UnknownResponseError(usage)
  }
  // always return data object
  return { message: response }
}

export const suspendCommand = {
  command,
  usage,
  description,
  parse
}
