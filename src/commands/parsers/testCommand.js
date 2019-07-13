import { UNSUPPORTED_SUBCOMMAND_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

import { testSquareCommand } from './testSquareCommand.js'
import { testCircleCommand } from './testCircleCommand.js'
import { testJogCommand } from './testJogCommand.js'
import { testRawCommand } from './testRawCommand.js'

const command = 'test'
const usage = 'test <square|circle|jog|raw> <...options>'
const description = 'Execute some tests'

const options = ['circle', 'square', 'jog', 'raw']

function parse ({ args, response }) {
  const subcommand = args.shift()
  // throw an error if something goes wrong
  if (!options.includes(subcommand)) {
    throw new CommandError({
      type: UNSUPPORTED_SUBCOMMAND_ERROR,
      message: `Unsupported subcommand [${subcommand}]\nUsage: ${usage}`
    })
  }
  // delegate
  switch (subcommand) {
    case 'square': return testSquareCommand.parse({ args, response })
    case 'circle': return testCircleCommand.parse({ args, response })
    case 'jog': return testJogCommand.parse({ args, response })
    case 'raw': return testRawCommand.parse({ args, response })
  }
}

export const testCommand = {
  command,
  usage,
  description,
  parse
}
