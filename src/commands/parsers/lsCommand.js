// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L301
import { UNKNOWN_RESPONSE_ERROR, DIRECTORY_NOT_FOUND_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = 'ls'
const usage = 'ls [-s] <file>'
const description = 'List directory'

function sortByPath (files) {
  let sortedFiles = [ ...files ]
  return sortedFiles.sort((a, b) => {
    if (a.path < b.path) return -1
    if (a.path > b.path) return 1
    return 0
  })
}

function folderFactory ({ path, line }) {
  const name = line.slice(0, -1)
  const folderPath = `${path}/${name}`
  return {
    type: 'folder',
    name,
    path: folderPath,
    parent: path
  }
}

function fileFactory ({ path, line, getSize }) {
  let name = line
  let parts = line.split(' ')
  let size = getSize ? parseInt(parts.pop()) : undefined
  name = parts.join(' ')
  return {
    name,
    size,
    type: 'file',
    parent: path,
    path: `${path}/${name}`,
    extension: name.split('.').pop()
  }
}

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Could not open')) {
    throw new CommandError({
      type: DIRECTORY_NOT_FOUND_ERROR,
      message: response
    })
  }
  try {
    let path = args[0]
    let getSize = args[0] === '-s'
    if (getSize) {
      path = args[1]
    }
    let files = response.split('\n').filter(line => line.length).map(line => {
      line = line.trim()
      let file = null
      if (line.endsWith('/')) {
        file = folderFactory({ path, line })
      } else {
        file = fileFactory({ path, line, getSize })
      }
      return file
    })
    return sortByPath(files)
  } catch (error) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: `Unknown response\nUsage: ${usage}`
    })
  }
}

export const lsCommand = {
  command,
  usage,
  description,
  parse
}
