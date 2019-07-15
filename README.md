# smoothie-commands
A Smoothie firmware (http|serial) commands API

Sent commands to smoothie firmware hardware over HTTP or Serial connexion and get in returns some structured data.

- Work In Progress...

> **Table of contents**
>
> * [Online demo](#online-demo)
> * [Install](#install)
> * [Usages](#usages)
>   * [HTTP interface](#http-interface)
>     - [ES6 module](#es6-module)
>     - [Browser](#browser)
>   * [Serial interface](#serial-interface)
> * [Error types](#error-types)
>   * [CommandError](#commanderror)
>   * [RequestError](#requesterror)
> * [Supported commands](#supported-commands)
> * [Development](#development)
>     - [Install](#install)
>     - [Run dev server](#run-dev-server)
>     - [Run demo server](#run-demo-server)
>     - [Build bundle](#build-bundle)
>     - [Build demo](#build-demo)
>     - [Publish demo](#publish-demo)
>     - [Build all](#build-all)
>     - [Lint code](#lint-code)
# Online demo
- [Http interface](http://smoothie-commands.surge.sh/)

# Install
`> yarn add smoothie-commands`

# Usages
## HTTP interface
### ES6 module
```js
import { command } from 'smoothie-commands/http'

command({
  address: '192.168.1.42',
  command: 'ls',
  args: ['/sd']
  timeout: 1000
})
  .then(response => {
    console.log('response:', response)
    console.log('data:', response.data)
  })
  .catch(error => {
    console.error(
      `${error.name}::${error.type}:`,
      error.message,
      error.response
    )
  })
```

### Browser
index.html
```html
<script src="./dist/bundle.http[.tiny].js"></script>
<script src="./index.js"></script>
```

index.js
```js
smoothieCommands.command({
  address: '192.168.1.42',
  command: 'ls',
  args: ['/sd']
  timeout: 1000
})
  .then(response => {
    console.log('response:', response)
    console.log('data:', response.data)
  })
  .catch(error => {
    console.error(
      `${error.name}::${error.type}:`,
      error.message,
      error.response
    )
  })
```

## Serial interface
- Work In Progress...

# Error types
## CommandError
```
ALREADY_SUSPENDED_ERROR
COULD_NOT_CREATE_ERROR
COULD_NOT_DELETE_ERROR
COULD_NOT_MOVE_ERROR
COULD_NOT_OPEN_ERROR
COULD_NOT_UPLOAD_ERROR
CURRENTLY_PLAYING_ERROR
FILE_NOT_FOUND_ERROR
INVALID_ARGUMENTS_ERROR
INVALID_COMMAND_ERROR
KILL_ERROR
MINIMAL_DURATION_ERROR
NOT_CURRENTLY_PLAYING_ERROR
NOT_ENOUGH_SPACE_ERROR
NOT_SUSPENDED_ERROR
NO_HEATERS_FOUND_ERROR
NO_LASER_MODULE_ERROR
UNDEFINED_ERROR
UNDEFINED_SETTING_ERROR
UNKNOWN_DEVICE_ERROR
UNKNOWN_FILE_SIZE_ERROR
UNKNOWN_RESPONSE_ERROR
UNSUPPORTED_COMMAND_ERROR
UNSUPPORTED_PARSER_ERROR
UNSUPPORTED_SUBCOMMAND_ERROR
```

## RequestError
```
NETWORK_ERROR
REQUEST_ABORTED_ERROR
REQUEST_OPEN_ERROR
REQUEST_TIMEOUT_ERROR
PARALLEL_REQUEST_ERROR
SERVER_ERROR
```

# Supported commands
```
abort                                              - Abort currently playing file
break                                              - Enter in MRI mode
calc_thermistor <T1,R1,T2,R2,T3,R3>                - Calculate the Steinhart Hart coefficients
cat <file> [limit]                                 - Output the contents of a file
cd <path>                                          - Change current absolute path to provided path
config-get [local|sd|cache] <setting>              - Get config setting value from the specified source
config-load <load|unload|dump|checksum>            - Load config values from the specified source
config-set <source> <setting> <value>              - Set value to the specified source setting
dfu                                                - Entering boot mode
echo <message>                                     - Echo echo echo...
fire <power|off|status> [duration]                 - Fire laser manualy
get <fk|ik|pos|state|status|temp|wcs> <...options> - Get some values
get fk [-m] x[,y,z]                                - Do forward kinematics on the given actuator position and display the cartesian coordinates
get ik [-m] x[,y,z]                                - Do inverse kinematics on the given cartesian position and display the actuator coordinates
get pos                                            - Get all the various M114 variants
get state                                          - Get state
get status                                         - Get status
get temp [device]                                  - Get temperature for a device
get wcs                                            - Get world coordinate system
help                                               - Get some help
load <file>                                        - Load config values from the specified file
ls [-s] <file>                                     - List directory
md5sum <file>                                      - Get the md5 sum for a file
mem [-v]                                           - Get memory informations
mkdir <path>                                       - Create new directory
mv <source> <target>                               - Move a file from source to target path
net                                                - Get network informations
play <file>                                        - Play file from SD card
progress [-b]                                      - Get SD or File playing progression
pwd                                                - Get (print) current working directory
remount                                            - Remount SD card
reset                                              - Reset the board
resume                                             - Resume the suspended print
rm <file>                                          - Remove a file or an empty folder
save <file>                                        - Saves the specified config-override file
set_temp <device> <value>                          - Set device temperature
suspend                                            - Suspend a print in progress
switch <name> [onf|off]                            - Set or get switch state for a named switch
test circle <radius> <iterations> [feedrate]       - Draws a circle around origin
test <square|circle|jog|raw> <...options>          - Execute some tests
test jog <axis> <distance> <iterations> [feedrate] - Jogs back and forth from origin
test raw <axis> <steps> <speed>                    - Issues raw steps to the specified axis
test square <size> <iterations> [feedrate]         - Draws a square from origin
thermistors                                        - Get predefined thermistors
upload [path] <filename> <...contents>             - Saves a stream of text to the named file
version                                            - Get firmware version
```

# Development
### Install
`> yarn install`

### Run dev server
`> yarn serv:dev`

### Run demo server
`> yarn serv:demo`

### Build bundle
`> yarn bundle:http`

`> yarn bundle:http:tiny`

### Build demo
`> yarn build:demo`

### Publish demo
`> yarn surge:demo`

### Build all
`> yarn build`

### Lint code
`> yarn lint`
