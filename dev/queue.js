import { queue, command } from '../src/http'

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
  commands,
  onSend (payload) {
    console.log('send:', payload)
  },
  onResponse (payload) {
    console.log('response:', payload)
  },
  onError (payload) {
    console.error('error:', payload)

  },
  onDone (results) {
    console.log('done:', results)
  }
})

myQueue.start()
  .then(results => {
    console.log(results)
  })
// myQueue.pause()
// myQueue.resume()
// myQueue.stop()
