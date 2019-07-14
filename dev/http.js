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
// send({ command: 'calc_thermistor', args: ['100000.0,150,1655.0,240,269.0'] })
// send({ command: 'cat', args: ['/sd/test-circle-10.gcode'] })
// send({ command: 'cd', args: ['/'] })
// send({ command: 'config-get', args: ['sd', 'extruder.hotend.steps_per_mm'] })
// send({ command: 'config-load', args: ['schecksum'] })
// send({ command: 'config-set', args: ['sd', 'extruder.hotend.steps_per_mm', 42] })
// send({ command: 'dfu' })
// send({ command: 'echo', args: ['hello smoothie'] })
// send({ command: 'fire', args: [10, 5] })
// send({ command: 'get', args: ['dfk', '10,15,20'] })
// send({ command: 'get', args: ['ik', '-m', '10,15,20'] })
// send({ command: 'get', args: ['pos'] })
// send({ command: 'get', args: ['state'] })
// send({ command: 'get', args: ['status'] })
// send({ command: 'get', args: ['temp', 'bed'] })
// send({ command: 'get', args: ['wcs'] })
// send({ command: 'help' })
// send({ command: 'load', args: ['/sd/config-override'] })
// send({ command: 'ls', args: ['-s', '/ssd'] })
// send({ command: 'md5sum', args: ['/sd/config.txt'] })
// send({ command: 'mem', args: ['-v'] })
// send({ command: 'mkdir', args: ['/sd/test'] })
// send({ command: 'mv', args: ['/sd/test2.txt', '/sd/test3.txt'] })
// send({ command: 'net' })
// send({ command: 'play', args: ['/sd/test-circle-10.gcode'] })
// send({ command: 'progress', args: ['-b'] })
// send({ command: 'pwd' })
// send({ command: 'remount' })
// send({ command: 'reset' })
// send({ command: 'resume' })
// send({ command: 'rm', args: ['/sd/test3.txt'] })
// send({ command: 'save', args: ['/sd/config-override.txt'] })
// send({ command: 'set_temp', args: ['bed', 50] })
// send({ command: 'suspend' })
// send({ command: 'switch', args: ['fan'] })
// send({ command: 'test', args: ['circle', 10, 5, 5000] })
// send({ command: 'test', args: ['jog', 'x', 10, 5, 5000] })
// send({ command: 'test', args: ['raw', 'x', 200, 200] })
// send({ command: 'test', args: ['square', 10, 5, 5000] })
// send({ command: 'thermistors' })

// send({ command: 'upload', args: ['/sd', 'pouet.txt', 'Pouet...'] })
// send({ command: 'upload', args: ['pouet.txt', 'Pouet...'] })

// send({ command: 'version', timeout: 1000 })
send({ command: 'version', timeout: 1000 })

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
// getWcsCommand         | DONE
// helpCommand           | DONE
// loadCommand           | DONE
// lsCommand             | DONE
// md5sumCommand         | DONE
// memCommand            | DONE
// mkdirCommand          | DONE
// mvCommand             | DONE
// netCommand            | DONE
// playCommand           | DONE
// progressCommand       | DONE
// pwdCommand            | DONE
// remountCommand        | DONE
// resetCommand          | DONE
// resumeCommand         | DONE
// rmCommand             | DONE
// saveCommand           | DONE
// setTempCommand        | DONE
// suspendCommand        | DONE
// switchCommand         | DONE
// testCircleCommand     | DONE
// testCommand           | DONE
// testJogCommand        | DONE
// testRawCommand        | DONE
// testSquareCommand     | DONE
// thermistorsCommand    | DONE
// uploadCommand         | DONE
// versionCommand        | DONE
