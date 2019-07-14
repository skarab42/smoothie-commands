// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L887
import UnknownResponseError from '../../errors/UnknownResponseError.js'

const command = 'get status'
const usage = 'get status'
const description = 'Get status'

const states = ['Alarm', 'Home', 'Hold', 'Idle', 'Run']
const axisLabels = ['x', 'y', 'z', 'a', 'b', 'c']
const feedrateLabels = ['current', 'requested', 'override']

function parseNumber (value, labels) {
  let ret = {}
  value.match(/[0-9.]+/g).forEach((val, key) => {
    ret[labels[key]] = parseFloat(val)
  })
  return ret
}

function parseHeater (value) {
  let matches = value.match(/([^:]+):(inf|[0-9.]+),(inf|[0-9.]+)/)
  if (!matches) {
    throw new Error(`Undefined heater`)
  }
  return {
    designator: matches[1],
    currentTemp: matches[2] === 'inf' ? Infinity : parseFloat(matches[2]),
    targetTemp: matches[3] === 'inf' ? Infinity : parseFloat(matches[3])
  }
}

function parseResponse (response) {
  let status = {}
  let text = response.slice(1, -1)
  let parts = text.split('|')
  let state = parts.shift()
  let mpos = parts.shift()
  let wpos = parts.shift()
  let feedrate = parts.shift()
  if (!states.includes(state)) {
    throw new Error(`Unknown state [ ${state} ]`)
  }
  if (!mpos.startsWith('MPos:')) {
    throw new Error(`Undefined machine position`)
  }
  if (!wpos.startsWith('WPos:')) {
    throw new Error(`Undefined workspace position`)
  }
  if (!feedrate.startsWith('F:')) {
    throw new Error(`Undefined feedrate`)
  }
  status.state = state
  status.idle = state === 'Idle'
  status.alarm = state === 'Alarm'
  status.homming = state === 'Home'
  status.holding = state === 'Hold'
  status.running = ['Home', 'Run'].includes(state)
  status.machine = parseNumber(mpos, axisLabels)
  status.workspace = parseNumber(wpos, axisLabels)
  status.feedrate = parseNumber(feedrate, feedrateLabels)
  // laser module ?
  if (status.running && parts[0].startsWith('L:') && parts[1].startsWith('S:')) {
    status.laser = {
      power: parseFloat(parts.shift().slice(2)),
      sValue: parseFloat(parts.shift().slice(2))
    }
  }
  // any parts left is a heater
  status.heaters = []
  parts.forEach(heater => {
    status.heaters.push(parseHeater(heater))
  })
  // return status
  return status
}

function parse ({ args, response }) {
  try {
    return parseResponse(response)
  } catch (error) {
    throw new UnknownResponseError(usage, error)
  }
}

export const getStatusCommand = {
  command,
  usage,
  description,
  parse
}
