// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L866
import UnknownResponseError from '../../errors/UnknownResponseError.js'

const command = 'get wcs'
const usage = 'get wcs'
const description = 'Get world coordinate system'

function parseResponse (response) {
  let lines = response.split('\n')
  lines = lines.map(line => line.slice(1, -1))
  let wcs = {
    current: lines.shift().split(': ').pop()
  }
  lines.forEach(line => {
    let parts = line.split(':')
    let code = parts.shift().toUpperCase()
    let coords = parts.shift().split(',')
    if (code === 'TOOL OFFSET') {
      code = 'tool'
    } else if (code === 'PRB') {
      code = 'prob'
    }
    wcs[code] = {
      x: parseFloat(coords[0]),
      y: parseFloat(coords[1]),
      z: parseFloat(coords[2])
    }
  })
  return wcs
}

function parse ({ args, response }) {
  try {
    return parseResponse(response)
  } catch (error) {
    throw new UnknownResponseError(usage, error)
  }
}

export const getWcsCommand = {
  command,
  usage,
  description,
  parse
}
