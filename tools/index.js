const { resolve } = require('path')
const { writeFileSync } = require('fs')
const commandsList = require('./commands-list')

// camelize...
function camelize (str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase()
  }).replace(/\s+/g, '')
}

// build commands collection
let commands = commandsList.map(command => {
  const name = camelize(command.replace(/[-_]/, ' '))
  return { command, name: `${name}Command` }
})

// sort collection by key
function sortByKey (key, collection) {
  let sortedCollection = [ ...collection ]
  return sortedCollection.sort((a, b) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    return 0
  })
}

commands = sortByKey('name', commands)

// DEBUG
console.log('commands:', commands.length)
console.log(commands)

// build file tree
const srcPath = resolve(__dirname, '../src')
const commandsPath = resolve(srcPath, 'commands', 'parsers')
const commandsFile = resolve(srcPath, 'commands', 'commands.js')

console.log(commandsFile, commandsPath)

// make commands exports
let buffer = []
commands.forEach(command => {
  buffer.push(`export * from './parsers/${command.name}.js'`)
})
writeFileSync(commandsFile, `${buffer.join('\n')}\n`)

// make commands modules
commands.forEach(command => {
  const commandFile = resolve(commandsPath, `${command.name}.js`)
  const template = `
import { UNKNOWN_RESPONSE_ERROR } from '../error-types.js'
import CommandError from '../CommandError.js'

const command = '${command.command}'
const usage = '${command.command} <arg1> [<arg2>]'
const description = 'Command description...'

function parse ({ args, response }) {
  console.log('parse:', { command, args, response })
  // throw an error if something goes wrong
  if (response === 42) {
    throw new CommandError({
      type: UNKNOWN_RESPONSE_ERROR,
      message: 'Unknown response'
    })
  }
  // create data object
  let data = {}
  // always return data object
  return data
}

export const ${command.name} = {
  command,
  usage,
  description,
  parse
}
`
  writeFileSync(commandFile, template.trim() + '\n')
})
