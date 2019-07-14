// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L637
import UnknownResponseError from '../../errors/UnknownResponseError.js'

const command = 'net'
const usage = 'net'
const description = 'Get network informations'

function parseResponse (response) {
  let parts = response.split('\n')
  let address = parts.shift()
  let gateway = parts.shift()
  let mask = parts.shift()
  let MAC = parts.shift()
  if (!address.startsWith('IP Addr: ')) {
    throw new Error(`Undefined IP address`)
  }
  if (!gateway.startsWith('IP GW: ')) {
    throw new Error(`Undefined network gateway`)
  }
  if (!mask.startsWith('IP mask: ')) {
    throw new Error(`Undefined network mask`)
  }
  if (!MAC.startsWith('MAC Address: ')) {
    throw new Error(`Undefined MAC address`)
  }
  return {
    address: address.slice(9),
    gateway: gateway.slice(7),
    mask: mask.slice(9),
    MAC: MAC.slice(13)
  }
}

function parse ({ args, response }) {
  try {
    return parseResponse(response)
  } catch (error) {
    throw new UnknownResponseError(usage, error)
  }
}

export const netCommand = {
  command,
  usage,
  description,
  parse
}
