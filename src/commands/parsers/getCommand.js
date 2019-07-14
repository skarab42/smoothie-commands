import UnsupportedSubcommandError from '../../errors/UnsupportedSubcommandError.js'
import { getFkCommand } from './getFkCommand.js'
import { getIkCommand } from './getIkCommand.js'
import { getPosCommand } from './getPosCommand.js'
import { getStateCommand } from './getStateCommand.js'
import { getStatusCommand } from './getStatusCommand.js'
import { getTempCommand } from './getTempCommand.js'
import { getWcsCommand } from './getWcsCommand.js'

const options = ['fk', 'ik', 'pos', 'state', 'status', 'temp', 'wcs']

const command = 'get'
const usage = 'get <fk|ik|pos|state|status|temp|wcs> <...options>'
const description = 'Get some values'

function parse ({ args, response }) {
  const subcommand = args.shift()
  // throw an error if something goes wrong
  if (!options.includes(subcommand)) {
    throw new UnsupportedSubcommandError(subcommand, usage)
  }
  // delegate
  switch (subcommand) {
    case 'fk': return getFkCommand.parse({ args, response })
    case 'ik': return getIkCommand.parse({ args, response })
    case 'pos': return getPosCommand.parse({ args, response })
    case 'state': return getStateCommand.parse({ args, response })
    case 'status': return getStatusCommand.parse({ args, response })
    case 'temp': return getTempCommand.parse({ args, response })
    case 'wcs': return getWcsCommand.parse({ args, response })
  }
}

export const getCommand = {
  command,
  usage,
  description,
  parse
}
