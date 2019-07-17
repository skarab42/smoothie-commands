import { queue } from '../src/http'

const address = '192.168.1.121'

const commands = [
  { address, command: 'version' },
  { address, command: 'get status' },
  { address, command: 'ls', args: ['/sd'] },
  { address, command: 'G0 X10 Y50' },
  { address, command: 'get status' },
  { address, command: 'get status' }
]

const myQueue = queue({
  // command list
  commands,
  // event callbacks
  onStart (payload) {
    console.log('start:', payload.commands.length)
  },
  onPause (payload) {
    console.log('pause:', payload.commands.length)
  },
  onResume (payload) {
    console.log('resume:', payload.commands.length)
  },
  onStop (payload) {
    console.log('stop:', payload.commands.length)
  },
  onSend (payload) {
    console.log('send:', payload.command, payload.commands.length)
  },
  onResponse (payload) {
    console.log('response:', payload.response)
  },
  onError (payload) {
    console.error('error:', payload.error)
  },
  onDone (results) {
    console.log('done:', results)
  }
})

// append/prepend one command
myQueue.append({ address, command: 'help' })

// append/prepend multiple command (version is called first)
myQueue.prepend({ address, command: 'help' }, { address, command: 'version' })

// append/prepend command block (help is called first)
myQueue.prepend([
  { address, command: 'help' },
  { address, command: 'version' }
])

// mixed style (call => G0 X10 Y50, get status, version, help)
myQueue.prepend(
  { address, command: 'help' },
  { address, command: 'version' },
  [
    { address, command: 'G0 X10 Y50' },
    { address, command: 'get status' }
  ]
)

// start the queue
myQueue.start()
  .then(results => {
    // return an array of results,
    // can by a response or an Error object
    console.log(results)
  })
// myQueue.pause()
// myQueue.resume()
// myQueue.stop()
