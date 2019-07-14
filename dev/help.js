import * as sh from '../src'

// generate help
let help = []
Object.values(sh.http.commands).forEach(command => {
  help.push(command.usage.padEnd(50, ' ') + ' - ' + command.description)
})

console.log(help.join('\n'))

// generate error types
let errorTypes = []
Object.values(sh.http.errorTypes).forEach(errorType => {
  errorTypes.push(errorType)
})

console.log(errorTypes.join('\n'))

// generate TOC -> copy and excute in the console on github edit mode
// console.log(
//   '\n\n\n> **Table of contents**\n> \n' +
//   Array.from(document.querySelectorAll('h1 > a, h2 > a, h3 > a')).map((a) => (
//     {'H1':'> * ','H2':'>   * ','H3':'>     - '}[a.parentNode.tagName] +
//     `[${a.parentNode.innerText.trim()}](${a.hash})`
//   )).join('\n') +
//   '\n\n\n'
// );
