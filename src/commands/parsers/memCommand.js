// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L599
import { UNKNOWN_RESPONSE_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'mem'
const usage = 'mem [-v]'
const description = 'Get memory informations'

function parseResponse (response, verbose) {
  let memory = {}
  response = response.replace(/\r\n/g, '\n').replace(/\t/g, '')
  response = response.replace(/Unused Heap: ([0-9]+) bytes\n/g, (match, p1) => {
    memory.unusedHeap = parseInt(p1)
    return ''
  })
  response = response.replace(/Used Heap Size: ([0-9]+)\n/g, (match, p1) => {
    memory.usedHeap = parseInt(p1)
    return ''
  })
  response = response.replace(/Allocated: ([0-9]+), /g, (match, p1) => {
    memory.allocated = parseInt(p1)
    return ''
  })
  response = response.replace(/Free: ([0-9]+)\n/g, (match, p1) => {
    memory.free = parseInt(p1)
    return ''
  })
  response = response.replace(/Total Free RAM: ([0-9]+) bytes\n/g, (match, p1) => {
    memory.freeRAM = parseInt(p1)
    return ''
  })
  response = response.replace(/Free AHB0: ([0-9]+), /g, (match, p1) => {
    memory.freeAHB0 = parseInt(p1)
    return ''
  })
  response = response.replace(/AHB1: ([0-9]+)\n/g, (match, p1) => {
    memory.freeAHB1 = parseInt(p1)
    return ''
  })
  response = response.replace(/Block size: ([0-9]+) bytes, /g, (match, p1) => {
    memory.blockSize = parseInt(p1)
    return ''
  })
  response = response.replace(/Tickinfo size: ([0-9]+) bytes/g, (match, p1) => {
    memory.tickInfoSize = parseInt(p1)
    return ''
  })
  let chunks = []
  let memoryPool = []
  let currentPool = null
  if (verbose) {
    response = response.replace(/Chunk: ([0-9]+) {2}Address: ([x0-9A-F]+) {2}Size: ([0-9]+) {2}(CHUNK FREE)?\n/g, (match, num, address, size, free) => {
      chunks.push({ num, address, size: parseInt(size), free: !!free })
      return ''
    })
    response = response.split('\n').map(line => {
      line = line.replace(/Start: ([0-9]+)b MemoryPool at ([x0-9a-f]+)/g, (match, start, address) => {
        currentPool = { address, start: parseInt(start), chunks: [], total: null, free: null }
        return ''
      })
      line = line.replace(/Chunk at ([x0-9a-f]+) \( *([0-9]+)\): (free|used), ([0-9]+) bytes/g, (match, address, offset, free, size) => {
        currentPool.chunks.push({ address, offset: parseInt(offset), free: free === 'free', size: parseInt(size) })
        return ''
      })
      line = line.replace(/End: total ([0-9]+)b, free: ([0-9]+)b/g, (match, total, free) => {
        currentPool = { ...currentPool, total: parseInt(total), free: parseInt(free) }
        memoryPool.push({ ...currentPool })
        currentPool = null
        return ''
      })
      return line
    })
      .filter(line => line.length)
      .join('\n')
      .trim()
  }
  return { ...memory, chunks, memoryPool }
}

function parse ({ args, response }) {
  try {
    let verbose = args[0] && args[0] === '-v'
    return parseResponse(response, verbose)
  } catch (error) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
}

export const memCommand = {
  command,
  usage,
  description,
  parse
}
