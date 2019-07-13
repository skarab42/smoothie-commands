import { command } from '../src/http'

const address = '192.168.1.121'

function send (options) {
  console.log('send:', options)
  return command({ address, ...options })
    .then(response => {
      console.log('response:', response)
      console.log('data:', JSON.stringify(response.data, null, 2))
      return response
    })
    .catch(error => {
      console.error(
        `${error.name}::${error.type}:`,
        error.message,
        error.response
      )
      return error
    })
}

// send({ command: 'abort' })
// send({ command: 'break' })
// send({ command: 'calc_thermistor', args: ['25,100000.0,150,1655.0,240,269.0'] })
// send({ command: 'cat', args: ['/sd/test-circle-10.gcode'] })
// send({ command: 'cd', args: ['/'] })
// send({ command: 'config-get', args: ['sd', 'extruder.hotend.steps_per_mm'] })
// send({ command: 'config-load', args: ['checksum'] })
// send({ command: 'config-set', args: ['sd', 'extruder.hotend.steps_per_mm', 42] })
// send({ command: 'dfu' })
// send({ command: 'echo', args: ['hello smoothie'] })
// send({ command: 'fire', args: [10, 5] })
// send({ command: 'get', args: ['fk', '10,15,20'] })
// send({ command: 'get', args: ['ik', '-m', '10,15,20'] })
// send({ command: 'get', args: ['pos'] })
// send({ command: 'get', args: ['state'] })
// send({ command: 'get', args: ['status'] })
send({ command: 'get', args: ['temp', 'bed'] })

// send({ command: 'resume' })
// send({ command: 'suspend' })
// send({ command: 'play', args: ['/sd/test-circle-10.gcode'] })
//   .then(response => {
//     send({ command: 'suspend' }).then(response => {
//       send({ command: 'resume' })
//     })
//   })
// send({ command: 'play', args: ['/sd/test-circle-20.gcode'] })
//   .then(response => {
//     let interval = setInterval(function () {
//       send({ command: 'progress', args: ['c'] })
//         .then(result => {
//           if (result.type === 'NOT_CURRENTLY_PLAYING_ERROR') {
//             clearInterval(interval)
//           }
//         })
//     }, 1000)
//   })
// send({ command: 'version' })

// abortCommand          | DONE
// breakCommand          | DONE
// calcThermistorCommand | DONE
// catCommand            | DONE
// cdCommand             | DONE
// configGetCommand      | DONE
// configLoadCommand     | DONE
// configSetCommand      | DONE
// dfuCommand            | DONE
// echoCommand           | DONE
// fireCommand           | DONE
// getCommand            | DONE
// getFkCommand          | DONE
// getIkCommand          | DONE
// getPosCommand         | DONE
// getStateCommand       | DONE
// getStatusCommand      | DONE
// getTempCommand        | DONE
// getWcsCommand         |
// helpCommand           |
// loadCommand           |
// lsCommand             |
// md5sumCommand         |
// memCommand            |
// mkdirCommand          |
// mvCommand             |
// netCommand            |
// playCommand           | DONE
// progressCommand       | DONE
// pwdCommand            |
// remountCommand        |
// resetCommand          |
// resumeCommand         | DONE
// rmCommand             |
// saveCommand           |
// setTempCommand        |
// suspendCommand        | DONE
// switchCommand         |
// testCircleCommand     |
// testCommand           | DONE
// testJogCommand        |
// testRawCommand        |
// testSquareCommand     |
// thermistorsCommand    |
// uploadCommand         |
// versionCommand        | DONE
