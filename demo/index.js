console.log('smoothie-commands:', smoothieCommands);

var address = localStorage.getItem('address') || '192.168.1.42';
var commands = [
  ['abort'],
  ['break'],
  ['calc_thermistor', '25,100000.0,150,1655.0,240,269.0'],
  ['cat', '/sd/config.txt'],
  ['cd', '/sd'],
  ['config-get', 'sd', 'extruder.hotend.steps_per_mm'],
  ['config-load', 'dump'],
  ['config-set', 'sd', 'extruder.hotend.steps_per_mm', 42],
  ['dfu'],
  ['echo', 'Hello Smoothie'],
  ['fire', '10', '50'],
  ['get', 'ik', '-m', '10,15,20'],
  ['get fk', '-m', '10,15,20'],
  ['get ik', '-m', '10,15,20'],
  ['get pos'],
  ['get state'],
  ['get status'],
  ['get temp', 'hotend'],
  ['get wcs'],
  ['help'],
  ['load', '/sd/config-override'],
  ['ls', '/sd'],
  ['md5sum', '/sd/config.txt'],
  ['mem', '-v'],
  ['mkdir', '/sd/gcodes'],
  ['mv', '/sd/config-override', '/sd/config-override.old'],
  ['net'],
  ['play', '/sd/gcodes/calicat.gcode'],
  ['progress', '-b'],
  ['pwd'],
  ['remount'],
  ['reset'],
  ['resume'],
  ['rm', '/sd/gcodes/calicat.gcode'],
  ['save', '/sd/config-override.new'],
  ['set_temp', 'bed', '42'],
  ['suspend'],
  ['switch', 'fan', 'on'],
  ['test circle', '10', '5', '5000'],
  ['test', 'circle', '10', '5', '5000'],
  ['test jog', 'x', '10', '5', '5000'],
  ['test raw', 'x', '200', '200'],
  ['test square', '10', '5', '5000'],
  ['thermistors'],
  ['upload', '/sd', 'readme.txt', '#README ...'],
  ['version']
];

var usages = [
  ['abort', 'abort'],
  ['break', 'break'],
  ['calc_thermistor', 'calc_thermistor <T1,R1,T2,R2,T3,R3>'],
  ['cat', 'cat <file> [limit]'],
  ['cd', 'cd <path>'],
  ['config-get', 'config-get [local|sd|cache] <setting>'],
  ['config-load', 'config-load <load|unload|dump|checksum>'],
  ['config-set', 'config-set <source> <setting> <value>'],
  ['dfu', 'dfu'],
  ['echo', 'echo <message>'],
  ['fire', 'fire <power|off|status> [duration]'],
  ['get', 'get <fk|ik|pos|state|status|temp|wcs> <...options>'],
  ['get fk', 'get fk [-m] x[,y,z]'],
  ['get ik', 'get ik [-m] x[,y,z]'],
  ['get pos', 'get pos'],
  ['get state', 'get state'],
  ['get status', 'get status'],
  ['get temp', 'get temp [device]'],
  ['get wcs', 'get wcs'],
  ['help', 'help'],
  ['load', 'load <file>'],
  ['ls', 'ls [-s] <file>'],
  ['md5sum', 'md5sum <file>'],
  ['mem', 'mem [-v]'],
  ['mkdir', 'mkdir <path>'],
  ['mv', 'mv <source> <target>'],
  ['net', 'net'],
  ['play', 'play <file>'],
  ['progress', 'progress [-b]'],
  ['pwd', 'pwd'],
  ['remount', 'remount'],
  ['reset', 'reset'],
  ['resume', 'resume'],
  ['rm', 'rm <file>'],
  ['save', 'save <file>'],
  ['set_temp', 'set_temp <device> <value>'],
  ['suspend', 'suspend'],
  ['switch', 'switch <name> [onf|off]'],
  ['test circle', 'test circle <radius> <iterations> [feedrate]'],
  ['test', 'test <square|circle|jog|raw> <...options>'],
  ['test jog', 'test jog <axis> <distance> <iterations> [feedrate]'],
  ['test raw', 'test raw <axis> <steps> <speed>'],
  ['test square', 'test square <size> <iterations> [feedrate]'],
  ['thermistors', 'thermistors'],
  ['upload', 'upload [path] <filename> <...contents>'],
  ['version', 'version']
];

// DOM elements
var $addressInput = document.querySelector('#addressInput');
var $commandSelect = document.querySelector('#commandSelect');
var $argsInput = document.querySelector('#argsInput');
var $sendButton = document.querySelector('#sendButton');
var $console = document.querySelector('#console');

// set default address
$addressInput.value = address;

// on address change
$addressInput.addEventListener('change', function () {
  address = $addressInput.value;
  $sendButton.disabled = disabled();
  if (address.length) {
    localStorage.setItem('address', address);
  }
  console.log('address:', address);
}, false);

function disabled () {
  return !address.length || !$commandSelect.selectedIndex;
}

// populate select input
commands.forEach(command => {
  var $option = document.createElement('option');
  $option.innerText = command[0];
  $commandSelect.appendChild($option);
});

// on command change
$commandSelect.addEventListener('change', selectCommand, false);

function getCommand (id) {
  return {
    command: commands[--id][0],
    args: commands[id].slice(1),
    usage: usages[id][1]
  };
}

function selectCommand (event) {
  var id = event.target.selectedIndex;
  if (!id) {
    console.log('select: none');
    $argsInput.placeholder = 'Arguments...';
    $sendButton.disabled = disabled();
    $argsInput.value = '';
    return;
  }
  var command = getCommand(id);
  $argsInput.value = command.args.join(' ');
  $argsInput.placeholder = 'No arguments';
  if (command.args.length) {
    $argsInput.placeholder = command.usage.replace(new RegExp(`^${command.command} `, 'g'), '');
  }
  $sendButton.disabled = disabled();
  console.log('select:', command);
}

// on send button click
$sendButton.addEventListener('click', sendCommand, false);

function sendCommand () {
  var command = $commandSelect.value;
  var args = $argsInput.value.split(' ');
  var params = { address, command, args };
  console.log('send:', params);
  smoothieCommands.command(params)
    .then(response => {
      console.log(response.data);
      addResponse(response);
    })
    .catch(error => {
      console.error(error);
      addError(error);
    });
}

// response factory
function prependChild (parent, child) {
  parent.insertBefore(child, parent.firstChild);
}

function addResponse (response) {
  var $response = document.createElement('div');
  var $requestPre = document.createElement('pre');
  var $responsePre = document.createElement('pre');
  var requestJSON = JSON.stringify(response.params, null, 2);
  var responseJSON = JSON.stringify(response.data, null, 2);
  $requestPre.innerText = `Request: ${requestJSON}`;
  $requestPre.className = 'request';
  $responsePre.innerText = `Response: ${responseJSON}`;
  $responsePre.className = 'response';
  $response.appendChild($requestPre);
  $response.appendChild($responsePre);
  // $console.appendChild($response);
  prependChild($console, $response);
}

// response factory
function addError (error) {
  var $response = document.createElement('div');
  var $requestPre = document.createElement('pre');
  var $responsePre = document.createElement('pre');
  var requestJSON = JSON.stringify(error.response.params, null, 2);
  var response = {
    type: error.type,
    name: error.name,
    message: error.message
  }
  var responseJSON = JSON.stringify(response, null, 2);
  $requestPre.innerText = `Request: ${requestJSON}`;
  $requestPre.className = 'request';
  $responsePre.innerText = `Error: ${responseJSON}`;
  $responsePre.className = 'error';
  $response.appendChild($requestPre);
  $response.appendChild($responsePre);
  // $console.appendChild($response);
  prependChild($console, $response);
}

// var pouet = []
// Object.values(smoothieCommands.commands).forEach(command => {
//   pouet.push(`['${command.command}', '${command.usage}']`)
// })
// console.log(pouet.join(',\n'));
