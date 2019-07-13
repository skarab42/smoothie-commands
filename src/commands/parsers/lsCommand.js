// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L301
import UnknownResponseError from '../errors/UnknownResponseError.js'
import CouldNotOpenError from '../errors/CouldNotOpenError.js'
import folderFactory from '../folderFactory.js'
import fileFactory from '../fileFactory.js'

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

function parse ({ args, response }) {
  // throw an error if something goes wrong
  if (response.startsWith('Could not open')) {
    throw new CouldNotOpenError(args[0] || null)
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
    throw new UnknownResponseError(usage, error)
  }
}

export const lsCommand = {
  command,
  usage,
  description,
  parse
}
