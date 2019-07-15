(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var http = _interopRequireWildcard(require("./http/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

window.smoothieCommands = http;

},{"./http/index.js":90}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abortCommand = require("./parsers/abortCommand.js");

Object.keys(_abortCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _abortCommand[key];
    }
  });
});

var _breakCommand = require("./parsers/breakCommand.js");

Object.keys(_breakCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _breakCommand[key];
    }
  });
});

var _calcThermistorCommand = require("./parsers/calcThermistorCommand.js");

Object.keys(_calcThermistorCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calcThermistorCommand[key];
    }
  });
});

var _catCommand = require("./parsers/catCommand.js");

Object.keys(_catCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _catCommand[key];
    }
  });
});

var _cdCommand = require("./parsers/cdCommand.js");

Object.keys(_cdCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cdCommand[key];
    }
  });
});

var _configGetCommand = require("./parsers/configGetCommand.js");

Object.keys(_configGetCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _configGetCommand[key];
    }
  });
});

var _configLoadCommand = require("./parsers/configLoadCommand.js");

Object.keys(_configLoadCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _configLoadCommand[key];
    }
  });
});

var _configSetCommand = require("./parsers/configSetCommand.js");

Object.keys(_configSetCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _configSetCommand[key];
    }
  });
});

var _dfuCommand = require("./parsers/dfuCommand.js");

Object.keys(_dfuCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dfuCommand[key];
    }
  });
});

var _echoCommand = require("./parsers/echoCommand.js");

Object.keys(_echoCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _echoCommand[key];
    }
  });
});

var _fireCommand = require("./parsers/fireCommand.js");

Object.keys(_fireCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fireCommand[key];
    }
  });
});

var _getCommand = require("./parsers/getCommand.js");

Object.keys(_getCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getCommand[key];
    }
  });
});

var _getFkCommand = require("./parsers/getFkCommand.js");

Object.keys(_getFkCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getFkCommand[key];
    }
  });
});

var _getIkCommand = require("./parsers/getIkCommand.js");

Object.keys(_getIkCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getIkCommand[key];
    }
  });
});

var _getPosCommand = require("./parsers/getPosCommand.js");

Object.keys(_getPosCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getPosCommand[key];
    }
  });
});

var _getStateCommand = require("./parsers/getStateCommand.js");

Object.keys(_getStateCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getStateCommand[key];
    }
  });
});

var _getStatusCommand = require("./parsers/getStatusCommand.js");

Object.keys(_getStatusCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getStatusCommand[key];
    }
  });
});

var _getTempCommand = require("./parsers/getTempCommand.js");

Object.keys(_getTempCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getTempCommand[key];
    }
  });
});

var _getWcsCommand = require("./parsers/getWcsCommand.js");

Object.keys(_getWcsCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getWcsCommand[key];
    }
  });
});

var _helpCommand = require("./parsers/helpCommand.js");

Object.keys(_helpCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _helpCommand[key];
    }
  });
});

var _loadCommand = require("./parsers/loadCommand.js");

Object.keys(_loadCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _loadCommand[key];
    }
  });
});

var _lsCommand = require("./parsers/lsCommand.js");

Object.keys(_lsCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lsCommand[key];
    }
  });
});

var _md5sumCommand = require("./parsers/md5sumCommand.js");

Object.keys(_md5sumCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _md5sumCommand[key];
    }
  });
});

var _memCommand = require("./parsers/memCommand.js");

Object.keys(_memCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _memCommand[key];
    }
  });
});

var _mkdirCommand = require("./parsers/mkdirCommand.js");

Object.keys(_mkdirCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mkdirCommand[key];
    }
  });
});

var _mvCommand = require("./parsers/mvCommand.js");

Object.keys(_mvCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mvCommand[key];
    }
  });
});

var _netCommand = require("./parsers/netCommand.js");

Object.keys(_netCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _netCommand[key];
    }
  });
});

var _playCommand = require("./parsers/playCommand.js");

Object.keys(_playCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _playCommand[key];
    }
  });
});

var _progressCommand = require("./parsers/progressCommand.js");

Object.keys(_progressCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _progressCommand[key];
    }
  });
});

var _pwdCommand = require("./parsers/pwdCommand.js");

Object.keys(_pwdCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pwdCommand[key];
    }
  });
});

var _remountCommand = require("./parsers/remountCommand.js");

Object.keys(_remountCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _remountCommand[key];
    }
  });
});

var _resetCommand = require("./parsers/resetCommand.js");

Object.keys(_resetCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _resetCommand[key];
    }
  });
});

var _resumeCommand = require("./parsers/resumeCommand.js");

Object.keys(_resumeCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _resumeCommand[key];
    }
  });
});

var _rmCommand = require("./parsers/rmCommand.js");

Object.keys(_rmCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rmCommand[key];
    }
  });
});

var _saveCommand = require("./parsers/saveCommand.js");

Object.keys(_saveCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _saveCommand[key];
    }
  });
});

var _setTempCommand = require("./parsers/setTempCommand.js");

Object.keys(_setTempCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _setTempCommand[key];
    }
  });
});

var _suspendCommand = require("./parsers/suspendCommand.js");

Object.keys(_suspendCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _suspendCommand[key];
    }
  });
});

var _switchCommand = require("./parsers/switchCommand.js");

Object.keys(_switchCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _switchCommand[key];
    }
  });
});

var _testCircleCommand = require("./parsers/testCircleCommand.js");

Object.keys(_testCircleCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _testCircleCommand[key];
    }
  });
});

var _testCommand = require("./parsers/testCommand.js");

Object.keys(_testCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _testCommand[key];
    }
  });
});

var _testJogCommand = require("./parsers/testJogCommand.js");

Object.keys(_testJogCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _testJogCommand[key];
    }
  });
});

var _testRawCommand = require("./parsers/testRawCommand.js");

Object.keys(_testRawCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _testRawCommand[key];
    }
  });
});

var _testSquareCommand = require("./parsers/testSquareCommand.js");

Object.keys(_testSquareCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _testSquareCommand[key];
    }
  });
});

var _thermistorsCommand = require("./parsers/thermistorsCommand.js");

Object.keys(_thermistorsCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _thermistorsCommand[key];
    }
  });
});

var _uploadCommand = require("./parsers/uploadCommand.js");

Object.keys(_uploadCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _uploadCommand[key];
    }
  });
});

var _versionCommand = require("./parsers/versionCommand.js");

Object.keys(_versionCommand).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _versionCommand[key];
    }
  });
});

},{"./parsers/abortCommand.js":7,"./parsers/breakCommand.js":8,"./parsers/calcThermistorCommand.js":9,"./parsers/catCommand.js":10,"./parsers/cdCommand.js":11,"./parsers/configGetCommand.js":12,"./parsers/configLoadCommand.js":13,"./parsers/configSetCommand.js":14,"./parsers/dfuCommand.js":15,"./parsers/echoCommand.js":16,"./parsers/fireCommand.js":17,"./parsers/getCommand.js":18,"./parsers/getFkCommand.js":19,"./parsers/getIkCommand.js":20,"./parsers/getPosCommand.js":21,"./parsers/getStateCommand.js":22,"./parsers/getStatusCommand.js":23,"./parsers/getTempCommand.js":24,"./parsers/getWcsCommand.js":25,"./parsers/helpCommand.js":26,"./parsers/loadCommand.js":27,"./parsers/lsCommand.js":28,"./parsers/md5sumCommand.js":29,"./parsers/memCommand.js":30,"./parsers/mkdirCommand.js":31,"./parsers/mvCommand.js":32,"./parsers/netCommand.js":33,"./parsers/playCommand.js":34,"./parsers/progressCommand.js":35,"./parsers/pwdCommand.js":36,"./parsers/remountCommand.js":37,"./parsers/resetCommand.js":38,"./parsers/resumeCommand.js":39,"./parsers/rmCommand.js":40,"./parsers/saveCommand.js":41,"./parsers/setTempCommand.js":42,"./parsers/suspendCommand.js":43,"./parsers/switchCommand.js":44,"./parsers/testCircleCommand.js":45,"./parsers/testCommand.js":46,"./parsers/testJogCommand.js":47,"./parsers/testRawCommand.js":48,"./parsers/testSquareCommand.js":49,"./parsers/thermistorsCommand.js":50,"./parsers/uploadCommand.js":51,"./parsers/versionCommand.js":52}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = fileFactory;

function fileFactory(_ref) {
  var path = _ref.path,
      line = _ref.line,
      getSize = _ref.getSize;
  var name = line;
  var parts = line.split(' ');
  var size = getSize ? parseInt(parts.pop()) : undefined;
  name = parts.join(' ');
  return {
    name: name,
    size: size,
    type: 'file',
    parent: path,
    path: "".concat(path, "/").concat(name),
    extension: name.split('.').pop()
  };
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = folderFactory;

function folderFactory(_ref) {
  var path = _ref.path,
      line = _ref.line;
  var name = line.slice(0, -1);
  var folderPath = "".concat(path, "/").concat(name);
  return {
    type: 'folder',
    name: name,
    path: folderPath,
    parent: path
  };
}

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function get() {
    return _parse["default"];
  }
});
exports.commands = void 0;

var commands = _interopRequireWildcard(require("./commands.js"));

exports.commands = commands;

var _parse = _interopRequireDefault(require("./parse.js"));

var _use = _interopRequireDefault(require("./use.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

Object.values(commands).map(_use["default"]);

},{"./commands.js":2,"./parse.js":6,"./use.js":53}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = parse;

var _UnsupportedParserError = _interopRequireDefault(require("../errors/UnsupportedParserError.js"));

var _use = require("./use.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function parse(_ref) {
  var command = _ref.command,
      response = _ref.response,
      args = _ref.args;

  if (!_use.usedCommands[command]) {
    throw new _UnsupportedParserError["default"](command);
  }

  return _use.usedCommands[command].parse({
    args: args,
    response: response
  });
}

},{"../errors/UnsupportedParserError.js":85,"./use.js":53}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abortCommand = void 0;

var _NotCurrentlyPlayingError = _interopRequireDefault(require("../../errors/NotCurrentlyPlayingError.js"));

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L283
// https://github.com/Smoothieware/Smoothieware/blob/489e577025b6df397ed8d3aa0707ff25e3dd1a97/src/modules/utils/player/Player.cpp#L369
var command = 'abort';
var usage = 'abort';
var description = 'Abort currently playing file';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('Not currently playing')) {
    throw new _NotCurrentlyPlayingError["default"]();
  }

  if (!response.startsWith('Aborted playing')) {
    throw new _UnknownResponseError["default"](usage);
  } // always return data object


  return {
    message: response
  };
}

var abortCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.abortCommand = abortCommand;

},{"../../errors/NotCurrentlyPlayingError.js":70,"../../errors/UnknownResponseError.js":83}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breakCommand = void 0;
// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L688
var command = 'break';
var usage = 'break';
var description = 'Enter in MRI mode';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;
  // break is immediate and never return
  // handled by root command function
  // always return data object
  return {};
}

var breakCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.breakCommand = breakCommand;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcThermistorCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

var _InvalidArgumentsError = _interopRequireDefault(require("../../errors/InvalidArgumentsError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L918
var command = 'calc_thermistor';
var usage = 'calc_thermistor <T1,R1,T2,R2,T3,R3>';
var description = 'Calculate the Steinhart Hart coefficients';
var coefficientsPattern = /Steinhart Hart coefficients: {2}I([0-9.]+) J([0-9.]+) K([0-9.]+)/;
var savedPattern = /Setting Thermistor/;

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('Usage:')) {
    throw new _InvalidArgumentsError["default"](args, usage);
  } // test pattern


  var matches = response.match(coefficientsPattern);

  if (!matches) {
    throw new _UnknownResponseError["default"](usage);
  } // always return data object


  return {
    I: matches[1],
    J: matches[2],
    K: matches[3],
    saved: !!response.match(savedPattern)
  };
}

var calcThermistorCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.calcThermistorCommand = calcThermistorCommand;

},{"../../errors/InvalidArgumentsError.js":64,"../../errors/UnknownResponseError.js":83}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.catCommand = void 0;

var _FileNotFoundError = _interopRequireDefault(require("../../errors/FileNotFoundError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L396
var command = 'cat';
var usage = 'cat <file> [limit]';
var description = 'Output the contents of a file';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('File not found')) {
    throw new _FileNotFoundError["default"](args[0] || null);
  } // always return data object


  return {
    contents: response
  };
}

var catCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.catCommand = catCommand;

},{"../../errors/FileNotFoundError.js":63}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cdCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

var _CouldNotOpenError = _interopRequireDefault(require("../../errors/CouldNotOpenError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L375
var command = 'cd';
var usage = 'cd <path>';
var description = 'Change current absolute path to provided path';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('Could not open directory')) {
    throw new _CouldNotOpenError["default"](args[0] || null);
  }

  if (response !== '') {
    throw new _UnknownResponseError["default"](usage);
  } // always return data object


  return {
    cwd: args[0]
  };
}

var cdCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.cdCommand = cdCommand;

},{"../../errors/CouldNotOpenError.js":60,"../../errors/UnknownResponseError.js":83}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configGetCommand = void 0;

var _InvalidArgumentsError = _interopRequireDefault(require("../../errors/InvalidArgumentsError.js"));

var _UndefinedSettingError = _interopRequireDefault(require("../../errors/UndefinedSettingError.js"));

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L275
// https://github.com/Smoothieware/Smoothieware/blob/0faa088fe1a2207f6c0b99ec7abccfbd1162f730/src/modules/utils/configurator/Configurator.cpp#L30
var command = 'config-get';
var usage = 'config-get [local|sd|cache] <setting>';
var description = 'Get config setting value from the specified source';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;
  var source = 'cache';
  var setting = args[0] || null;

  if (args.length > 1) {
    source = setting;
    setting = args[1] || null;
  } // throw an error if something goes wrong


  if (!response.length) {
    throw new _InvalidArgumentsError["default"](args, usage);
  }

  if (response.endsWith('is not in config')) {
    throw new _UndefinedSettingError["default"]("".concat(source, ":").concat(setting), usage);
  } // parse response


  var matches = response.match(/([^:]+): ([^ ]+) is set to (.+)/);

  if (!matches) {
    throw new _UnknownResponseError["default"](usage);
  } // always return data object


  return {
    source: source,
    setting: setting,
    value: matches[3]
  };
}

var configGetCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.configGetCommand = configGetCommand;

},{"../../errors/InvalidArgumentsError.js":64,"../../errors/UndefinedSettingError.js":80,"../../errors/UnknownResponseError.js":83}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configLoadCommand = void 0;

var _InvalidArgumentsError = _interopRequireDefault(require("../../errors/InvalidArgumentsError.js"));

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L281
// https://github.com/Smoothieware/Smoothieware/blob/0faa088fe1a2207f6c0b99ec7abccfbd1162f730/src/modules/utils/configurator/Configurator.cpp#L106
var command = 'config-load';
var usage = 'config-load <load|unload|dump|checksum>';
var description = 'Load config values from the specified source';

function parseResponse(option, response) {
  var data = {};

  if (option === 'dump') {
    data = {
      dump: response.split('\n')
    };
  } else if (option === 'checksum') {
    var parts = response.slice(11).split('=');
    data = {
      value: parts[0].trim(),
      checksum: parts[1].trim()
    };
  } else {
    data = {
      message: response
    };
  } // always return data object


  return data;
}

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('unsupported option:')) {
    throw new _InvalidArgumentsError["default"](args, usage);
  } // always return data object


  try {
    return parseResponse(args[0], response);
  } catch (error) {
    throw new _UnknownResponseError["default"](usage, error);
  }
}

var configLoadCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.configLoadCommand = configLoadCommand;

},{"../../errors/InvalidArgumentsError.js":64,"../../errors/UnknownResponseError.js":83}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configSetCommand = void 0;

var _InvalidArgumentsError = _interopRequireDefault(require("../../errors/InvalidArgumentsError.js"));

var _UndefinedSettingError = _interopRequireDefault(require("../../errors/UndefinedSettingError.js"));

var _NotEnoughSpaceError = _interopRequireDefault(require("../../errors/NotEnoughSpaceError.js"));

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L277
// https://github.com/Smoothieware/Smoothieware/blob/0faa088fe1a2207f6c0b99ec7abccfbd1162f730/src/modules/utils/configurator/Configurator.cpp#L68
var command = 'config-set';
var usage = 'config-set <source> <setting> <value>';
var description = 'Set value to the specified source setting';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;
  var source = args[0] || null;
  var setting = args[1] || null; // let value = args[2] || null
  // throw an error if something goes wrong

  if (response.startsWith('Usage:')) {
    throw new _InvalidArgumentsError["default"](args, usage);
  }

  if (response.endsWith('source does not exist')) {
    throw new _UndefinedSettingError["default"]("".concat(source, ":").concat(setting), usage);
  }

  if (response.endsWith('not enough space')) {
    throw new _NotEnoughSpaceError["default"]("".concat(source, ":").concat(setting));
  } // parse response


  var matches = response.match(/([^:]+): ([^ ]+) has been set to (.+)/);

  if (!matches) {
    throw new _UnknownResponseError["default"](usage);
  } // always return data object


  return {
    source: source,
    setting: setting,
    value: matches[3]
  };
}

var configSetCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.configSetCommand = configSetCommand;

},{"../../errors/InvalidArgumentsError.js":64,"../../errors/NotEnoughSpaceError.js":71,"../../errors/UndefinedSettingError.js":80,"../../errors/UnknownResponseError.js":83}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dfuCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L681
var command = 'dfu';
var usage = 'dfu';
var description = 'Entering boot mode';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (!response.startsWith('Entering boot mode')) {
    throw new _UnknownResponseError["default"](usage);
  } // always return data object


  return {
    message: response
  };
}

var dfuCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.dfuCommand = dfuCommand;

},{"../../errors/UnknownResponseError.js":83}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.echoCommand = void 0;
// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L460
var command = 'echo';
var usage = 'echo <message>';
var description = 'Echo echo echo...';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;
  // always return data object
  return {
    message: response
  };
}

var echoCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.echoCommand = echoCommand;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fireCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

var _MinimalDurationError = _interopRequireDefault(require("../../errors/MinimalDurationError.js"));

var _NoLaserModuleError = _interopRequireDefault(require("../../errors/NoLaserModuleError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L286
// https://github.com/Smoothieware/Smoothieware/blob/0faa088fe1a2207f6c0b99ec7abccfbd1162f730/src/modules/tools/laser/Laser.cpp#L136
var command = 'fire';
var usage = 'fire <power|off|status> [duration]';
var description = 'Fire laser manualy';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('Usage:')) {
    throw new _UnknownResponseError["default"](usage);
  }

  if (response === '') {
    throw new _NoLaserModuleError["default"]();
  }

  var matches = response.match(/Minimal duration is ([0-9]+) ms/);

  if (matches) {
    throw new _MinimalDurationError["default"](matches[1]);
  } // status


  matches = response.match(/laser manual state: (on|off)/);

  if (matches) {
    var on = matches[1] === 'on';
    return {
      status: matches[1],
      on: on,
      off: !on
    };
  }

  if (response.startsWith('turning laser off')) {
    return {
      power: 0,
      fire: false,
      status: 'off',
      on: false,
      off: true
    };
  }

  matches = response.match(/Firing laser at ([0-9.]+)% power(, for ([0-9]+) ms)?/);

  if (matches) {
    var power = parseFloat(matches[1]);
    var duration = matches[2] ? parseFloat(matches[3]) : undefined;
    return {
      power: power,
      duration: duration,
      fire: true,
      status: 'on',
      on: true,
      off: false
    };
  } // nothing match...


  throw new _UnknownResponseError["default"](usage);
}

var fireCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.fireCommand = fireCommand;

},{"../../errors/MinimalDurationError.js":67,"../../errors/NoLaserModuleError.js":69,"../../errors/UnknownResponseError.js":83}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommand = void 0;

var _UnsupportedSubcommandError = _interopRequireDefault(require("../../errors/UnsupportedSubcommandError.js"));

var _getFkCommand = require("./getFkCommand.js");

var _getIkCommand = require("./getIkCommand.js");

var _getPosCommand = require("./getPosCommand.js");

var _getStateCommand = require("./getStateCommand.js");

var _getStatusCommand = require("./getStatusCommand.js");

var _getTempCommand = require("./getTempCommand.js");

var _getWcsCommand = require("./getWcsCommand.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var options = ['fk', 'ik', 'pos', 'state', 'status', 'temp', 'wcs'];
var command = 'get';
var usage = 'get <fk|ik|pos|state|status|temp|wcs> <...options>';
var description = 'Get some values';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;
  var subcommand = args.shift(); // throw an error if something goes wrong

  if (!options.includes(subcommand)) {
    throw new _UnsupportedSubcommandError["default"](subcommand, usage);
  } // delegate


  switch (subcommand) {
    case 'fk':
      return _getFkCommand.getFkCommand.parse({
        args: args,
        response: response
      });

    case 'ik':
      return _getIkCommand.getIkCommand.parse({
        args: args,
        response: response
      });

    case 'pos':
      return _getPosCommand.getPosCommand.parse({
        args: args,
        response: response
      });

    case 'state':
      return _getStateCommand.getStateCommand.parse({
        args: args,
        response: response
      });

    case 'status':
      return _getStatusCommand.getStatusCommand.parse({
        args: args,
        response: response
      });

    case 'temp':
      return _getTempCommand.getTempCommand.parse({
        args: args,
        response: response
      });

    case 'wcs':
      return _getWcsCommand.getWcsCommand.parse({
        args: args,
        response: response
      });
  }
}

var getCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.getCommand = getCommand;

},{"../../errors/UnsupportedSubcommandError.js":86,"./getFkCommand.js":19,"./getIkCommand.js":20,"./getPosCommand.js":21,"./getStateCommand.js":22,"./getStatusCommand.js":23,"./getTempCommand.js":24,"./getWcsCommand.js":25}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFkCommand = void 0;

var _InvalidArgumentsError = _interopRequireDefault(require("../../errors/InvalidArgumentsError.js"));

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L809
var command = 'get fk';
var usage = 'get fk [-m] x[,y,z]';
var description = 'Do forward kinematics on the given actuator position and display the cartesian coordinates';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('error:usage:')) {
    throw new _InvalidArgumentsError["default"](args, usage);
  } // test


  var matches = response.match(/X ([0-9.]+), Y ([0-9.]+), Z ([0-9.]+)/);

  if (!matches) {
    throw new _UnknownResponseError["default"](usage);
  } // always return data object


  return {
    move: typeof args[0] === 'string' && !!args[0].match(/-m/i),
    x: parseFloat(matches[1]),
    y: parseFloat(matches[2]),
    z: parseFloat(matches[3])
  };
}

var getFkCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.getFkCommand = getFkCommand;

},{"../../errors/InvalidArgumentsError.js":64,"../../errors/UnknownResponseError.js":83}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIkCommand = void 0;

var _InvalidArgumentsError = _interopRequireDefault(require("../../errors/InvalidArgumentsError.js"));

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L809
var command = 'get ik';
var usage = 'get ik [-m] x[,y,z]';
var description = 'Do inverse kinematics on the given cartesian position and display the actuator coordinates';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('error:usage:')) {
    throw new _InvalidArgumentsError["default"](args, usage);
  } // test


  var matches = response.match(/X ([0-9.]+), Y ([0-9.]+), Z ([0-9.]+)/);

  if (!matches) {
    throw new _UnknownResponseError["default"](usage);
  } // always return data object


  return {
    move: typeof args[0] === 'string' && !!args[0].match(/-m/i),
    x: parseFloat(matches[1]),
    y: parseFloat(matches[2]),
    z: parseFloat(matches[3])
  };
}

var getIkCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.getIkCommand = getIkCommand;

},{"../../errors/InvalidArgumentsError.js":64,"../../errors/UnknownResponseError.js":83}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L856
var command = 'get pos';
var usage = 'get pos';
var description = 'Get all the various M114 variants';

function parseLine(line) {
  var parts = line.toLowerCase().split(':');
  var key = parts.shift().replace(' ', '_');
  var coords = parts.join(':').trim().split(' ');
  var result = {
    key: key,
    coords: {}
  };
  coords.forEach(function (coord) {
    coord = coord.split(':');
    result.coords[coord[0]] = parseFloat(coord[1]);
  });

  switch (key) {
    case 'last_c':
      result.command = 'M114';
      result.description = 'Position of all axes';
      break;

    case 'realtime_wcs':
      result.command = 'M114.1';
      result.description = 'Real time position of all axes';
      break;

    case 'mcs':
      result.command = 'M114.2';
      result.description = 'Real time machine position of all axes';
      break;

    case 'apos':
      result.command = 'M114.3';
      result.description = 'Real time actuator position of all actuators';
      break;

    case 'mp':
      result.command = 'M114.4';
      result.description = 'Last milestone';
      break;

    case 'cmp':
      result.command = 'M114.5';
      result.description = 'Last machine position';
      break;

    default:
      result.command = 'M114.?';
      result.description = 'Unknown type';
  }

  return result;
}

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  try {
    return response.trim().split('\n').map(parseLine);
  } catch (error) {
    throw new _UnknownResponseError["default"](usage, error);
  }
}

var getPosCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.getPosCommand = getPosCommand;

},{"../../errors/UnknownResponseError.js":83}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStateCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L870
var command = 'get state';
var usage = 'get state';
var description = 'Get state';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  try {
    var state = response.trim().slice(1, -1).split(' ');
    return {
      modal: state[0],
      wcs: state[1],
      planeSelection: state[2],
      unit: state[3],
      distanceMode: state[4],
      pathControl: state[5],
      programPause: state[6],
      stopTool: state[7],
      stopCoolant: state[8],
      tool: state[9],
      feedRate: state[10],
      sValue: state[11]
    };
  } catch (error) {
    throw new _UnknownResponseError["default"](usage, error);
  }
}

var getStateCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.getStateCommand = getStateCommand;

},{"../../errors/UnknownResponseError.js":83}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatusCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L887
var command = 'get status';
var usage = 'get status';
var description = 'Get status';
var states = ['Alarm', 'Home', 'Hold', 'Idle', 'Run'];
var axisLabels = ['x', 'y', 'z', 'a', 'b', 'c'];
var feedrateLabels = ['current', 'requested', 'override'];

function parseNumber(value, labels) {
  var ret = {};
  value.match(/[0-9.]+/g).forEach(function (val, key) {
    ret[labels[key]] = parseFloat(val);
  });
  return ret;
}

function parseHeater(value) {
  var matches = value.match(/([^:]+):(inf|[0-9.]+),(inf|[0-9.]+)/);

  if (!matches) {
    throw new Error("Undefined heater");
  }

  return {
    designator: matches[1],
    currentTemp: matches[2] === 'inf' ? Infinity : parseFloat(matches[2]),
    targetTemp: matches[3] === 'inf' ? Infinity : parseFloat(matches[3])
  };
}

function parseResponse(response) {
  var status = {};
  var text = response.slice(1, -1);
  var parts = text.split('|');
  var state = parts.shift();
  var mpos = parts.shift();
  var wpos = parts.shift();
  var feedrate = parts.shift();

  if (!states.includes(state)) {
    throw new Error("Unknown state [ ".concat(state, " ]"));
  }

  if (!mpos.startsWith('MPos:')) {
    throw new Error("Undefined machine position");
  }

  if (!wpos.startsWith('WPos:')) {
    throw new Error("Undefined workspace position");
  }

  if (!feedrate.startsWith('F:')) {
    throw new Error("Undefined feedrate");
  }

  status.state = state;
  status.idle = state === 'Idle';
  status.alarm = state === 'Alarm';
  status.homming = state === 'Home';
  status.holding = state === 'Hold';
  status.running = ['Home', 'Run'].includes(state);
  status.machine = parseNumber(mpos, axisLabels);
  status.workspace = parseNumber(wpos, axisLabels);
  status.feedrate = parseNumber(feedrate, feedrateLabels); // laser module ?

  if (status.running && parts[0].startsWith('L:') && parts[1].startsWith('S:')) {
    status.laser = {
      power: parseFloat(parts.shift().slice(2)),
      sValue: parseFloat(parts.shift().slice(2))
    };
  } // any parts left is a heater


  status.heaters = [];
  parts.forEach(function (heater) {
    status.heaters.push(parseHeater(heater));
  }); // return status

  return status;
}

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  try {
    return parseResponse(response);
  } catch (error) {
    throw new _UnknownResponseError["default"](usage, error);
  }
}

var getStatusCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.getStatusCommand = getStatusCommand;

},{"../../errors/UnknownResponseError.js":83}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTempCommand = void 0;

var _NotHeatersFoundError = _interopRequireDefault(require("../../errors/NotHeatersFoundError.js"));

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

var _UnknownDeviceError = _interopRequireDefault(require("../../errors/UnknownDeviceError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L783
var command = 'get temp';
var usage = 'get temp [device]';
var description = 'Get temperature for a device';

function parseTemp(line) {
  // single: bed temp: inf/0.000000 @0
  // all: T (57988) temp: inf/0.000000 @0
  var matches = line.match(/([^ ]+) (\(([0-9]+)\))? ?temp: (inf|[0-9.]+)\/(inf|[0-9.]+) @([0-9]+)/);

  if (!matches) {
    throw new Error('Unknown heater fingerprint');
  }

  var temp = {
    currentTemp: matches[4] === 'inf' ? Infinity : parseFloat(matches[4]),
    targetTemp: matches[5] === 'inf' ? Infinity : parseFloat(matches[5]),
    pwm: parseInt(matches[6]) // all

  };

  if (matches[3]) {
    temp.id = parseInt(matches[3]);
    temp.designator = matches[1];
  } else {
    temp.name = matches[1];
  }

  return temp;
}

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  if (response.startsWith('no heaters found')) {
    throw new _NotHeatersFoundError["default"]();
  }

  if (response.endsWith('is not a known temperature device')) {
    throw new _UnknownDeviceError["default"](name);
  } // set data


  try {
    var data = {};

    if (name === 'all') {
      data.devices = response.split('\n').map(parseTemp);
    } else {
      data = parseTemp(response);
    }

    return data;
  } catch (error) {
    throw new _UnknownResponseError["default"](usage, error);
  }
}

var getTempCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.getTempCommand = getTempCommand;

},{"../../errors/NotHeatersFoundError.js":72,"../../errors/UnknownDeviceError.js":81,"../../errors/UnknownResponseError.js":83}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWcsCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L866
var command = 'get wcs';
var usage = 'get wcs';
var description = 'Get world coordinate system';

function parseResponse(response) {
  var lines = response.split('\n');
  lines = lines.map(function (line) {
    return line.slice(1, -1);
  });
  var wcs = {
    current: lines.shift().split(': ').pop()
  };
  lines.forEach(function (line) {
    var parts = line.split(':');
    var code = parts.shift().toUpperCase();
    var coords = parts.shift().split(',');

    if (code === 'TOOL OFFSET') {
      code = 'tool';
    } else if (code === 'PRB') {
      code = 'prob';
    }

    wcs[code] = {
      x: parseFloat(coords[0]),
      y: parseFloat(coords[1]),
      z: parseFloat(coords[2])
    };
  });
  return wcs;
}

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  try {
    return parseResponse(response);
  } catch (error) {
    throw new _UnknownResponseError["default"](usage, error);
  }
}

var getWcsCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.getWcsCommand = getWcsCommand;

},{"../../errors/UnknownResponseError.js":83}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helpCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L1267
var command = 'help';
var usage = 'help';
var description = 'Get some help';

function parseLine(line) {
  var parts = line.split(' - ').map(function (p) {
    return p.trim();
  });
  return {
    command: parts[0],
    description: parts[1] || ''
  };
}

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  try {
    return {
      help: response.split('\n').slice(1).map(parseLine)
    };
  } catch (error) {
    throw new _UnknownResponseError["default"](usage, error);
  }
}

var helpCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.helpCommand = helpCommand;

},{"../../errors/UnknownResponseError.js":83}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

var _FileNotFoundError = _interopRequireDefault(require("../../errors/FileNotFoundError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L281
// https://github.com/Smoothieware/Smoothieware/blob/0faa088fe1a2207f6c0b99ec7abccfbd1162f730/src/modules/utils/configurator/Configurator.cpp#L106
var command = 'load';
var usage = 'load <file>';
var description = 'Load config values from the specified file';

function parseResponse(response) {
  var lines = response.split('\n');
  var header = lines.shift();
  lines.pop(); // footer

  var config = [];
  var description = [];
  var configText = lines.join('\n').trim();
  lines.forEach(function (line) {
    line = line.trim();

    if (line.startsWith(';')) {
      description.push(line.slice(1).trim().replace(/:$/, ''));
    } else {
      config.push({
        gcode: line,
        description: description.join('\n')
      });
      description = [];
    }
  }); // always return data object

  return {
    file: header.slice(30, -3),
    configText: configText,
    config: config
  };
}

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('File not found: ')) {
    throw new _FileNotFoundError["default"](args[0] || null);
  } // parse...


  try {
    return parseResponse(response);
  } catch (error) {
    throw new _UnknownResponseError["default"](usage, error);
  }
}

var loadCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.loadCommand = loadCommand;

},{"../../errors/FileNotFoundError.js":63,"../../errors/UnknownResponseError.js":83}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lsCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

var _CouldNotOpenError = _interopRequireDefault(require("../../errors/CouldNotOpenError.js"));

var _folderFactory = _interopRequireDefault(require("../folderFactory.js"));

var _fileFactory = _interopRequireDefault(require("../fileFactory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var command = 'ls';
var usage = 'ls [-s] <file>';
var description = 'List directory';

function sortByPath(files) {
  var sortedFiles = _toConsumableArray(files);

  return sortedFiles.sort(function (a, b) {
    if (a.path < b.path) return -1;
    if (a.path > b.path) return 1;
    return 0;
  });
}

function parseResponse(args, response) {
  var path = args[0];
  var getSize = args[0] === '-s';

  if (getSize) {
    path = args[1];
  }

  var files = response.split('\n').filter(function (line) {
    return line.length;
  }).map(function (line) {
    line = line.trim();
    var file = null;

    if (line.endsWith('/')) {
      file = (0, _folderFactory["default"])({
        path: path,
        line: line
      });
    } else {
      file = (0, _fileFactory["default"])({
        path: path,
        line: line,
        getSize: getSize
      });
    }

    return file;
  });
  return sortByPath(files);
}

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('Could not open')) {
    throw new _CouldNotOpenError["default"](args[0] || null);
  }

  try {
    return parseResponse(args, response);
  } catch (error) {
    throw new _UnknownResponseError["default"](usage, error);
  }
}

var lsCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.lsCommand = lsCommand;

},{"../../errors/CouldNotOpenError.js":60,"../../errors/UnknownResponseError.js":83,"../fileFactory.js":3,"../folderFactory.js":4}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.md5sumCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

var _FileNotFoundError = _interopRequireDefault(require("../../errors/FileNotFoundError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L1009
var command = 'md5sum';
var usage = 'md5sum <file>';
var description = 'Get the md5 sum for a file';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('File not found:')) {
    throw new _FileNotFoundError["default"](args[0] || null);
  } // always return data object


  var parts = response.split(' ');

  if (parts.length !== 2) {
    throw new _UnknownResponseError["default"](usage);
  }

  return {
    file: args[0],
    hash: parts[0]
  };
}

var md5sumCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.md5sumCommand = md5sumCommand;

},{"../../errors/FileNotFoundError.js":63,"../../errors/UnknownResponseError.js":83}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var command = 'mem';
var usage = 'mem [-v]';
var description = 'Get memory informations';

function parseResponse(response, verbose) {
  var memory = {};
  response = response.replace(/\r\n/g, '\n').replace(/\t/g, '');
  response = response.replace(/Unused Heap: ([0-9]+) bytes\n/g, function (match, p1) {
    memory.unusedHeap = parseInt(p1);
    return '';
  });
  response = response.replace(/Used Heap Size: ([0-9]+)\n/g, function (match, p1) {
    memory.usedHeap = parseInt(p1);
    return '';
  });
  response = response.replace(/Allocated: ([0-9]+), /g, function (match, p1) {
    memory.allocated = parseInt(p1);
    return '';
  });
  response = response.replace(/Free: ([0-9]+)\n/g, function (match, p1) {
    memory.free = parseInt(p1);
    return '';
  });
  response = response.replace(/Total Free RAM: ([0-9]+) bytes\n/g, function (match, p1) {
    memory.freeRAM = parseInt(p1);
    return '';
  });
  response = response.replace(/Free AHB0: ([0-9]+), /g, function (match, p1) {
    memory.freeAHB0 = parseInt(p1);
    return '';
  });
  response = response.replace(/AHB1: ([0-9]+)\n/g, function (match, p1) {
    memory.freeAHB1 = parseInt(p1);
    return '';
  });
  response = response.replace(/Block size: ([0-9]+) bytes, /g, function (match, p1) {
    memory.blockSize = parseInt(p1);
    return '';
  });
  response = response.replace(/Tickinfo size: ([0-9]+) bytes/g, function (match, p1) {
    memory.tickInfoSize = parseInt(p1);
    return '';
  });
  var chunks = [];
  var memoryPool = [];
  var currentPool = null;

  if (verbose) {
    response = response.replace(/Chunk: ([0-9]+) {2}Address: ([x0-9A-F]+) {2}Size: ([0-9]+) {2}(CHUNK FREE)?\n/g, function (match, num, address, size, free) {
      chunks.push({
        num: num,
        address: address,
        size: parseInt(size),
        free: !!free
      });
      return '';
    });
    response = response.split('\n').map(function (line) {
      line = line.replace(/Start: ([0-9]+)b MemoryPool at ([x0-9a-f]+)/g, function (match, start, address) {
        currentPool = {
          address: address,
          start: parseInt(start),
          chunks: [],
          total: null,
          free: null
        };
        return '';
      });
      line = line.replace(/Chunk at ([x0-9a-f]+) \( *([0-9]+)\): (free|used), ([0-9]+) bytes/g, function (match, address, offset, free, size) {
        currentPool.chunks.push({
          address: address,
          offset: parseInt(offset),
          free: free === 'free',
          size: parseInt(size)
        });
        return '';
      });
      line = line.replace(/End: total ([0-9]+)b, free: ([0-9]+)b/g, function (match, total, free) {
        currentPool = _objectSpread({}, currentPool, {
          total: parseInt(total),
          free: parseInt(free)
        });
        memoryPool.push(_objectSpread({}, currentPool));
        currentPool = null;
        return '';
      });
      return line;
    }).filter(function (line) {
      return line.length;
    }).join('\n').trim();
  }

  return _objectSpread({}, memory, {
    chunks: chunks,
    memoryPool: memoryPool
  });
}

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  try {
    var verbose = args[0] && args[0] === '-v';
    return parseResponse(response, verbose);
  } catch (error) {
    throw new _UnknownResponseError["default"](usage, error);
  }
}

var memCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.memCommand = memCommand;

},{"../../errors/UnknownResponseError.js":83}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkdirCommand = void 0;

var _CouldNotCreateError = _interopRequireDefault(require("../../errors/CouldNotCreateError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var command = 'mkdir';
var usage = 'mkdir <path>';
var description = 'Create new directory';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('could not create')) {
    throw new _CouldNotCreateError["default"](args[0] || null);
  } // always return data object


  return {
    path: args[0]
  };
}

var mkdirCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.mkdirCommand = mkdirCommand;

},{"../../errors/CouldNotCreateError.js":57}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mvCommand = void 0;

var _CouldNotMoveError = _interopRequireDefault(require("../../errors/CouldNotMoveError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L356
var command = 'mv';
var usage = 'mv <source> <target>';
var description = 'Move a file from source to target path';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('Could not rename')) {
    throw new _CouldNotMoveError["default"](args[0] || null, args[1] || null);
  } // create and return data object


  return {
    source: args[0],
    target: args[1]
  };
}

var mvCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.mvCommand = mvCommand;

},{"../../errors/CouldNotMoveError.js":59}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.netCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L637
var command = 'net';
var usage = 'net';
var description = 'Get network informations';

function parseResponse(response) {
  var parts = response.split('\n');
  var address = parts.shift();
  var gateway = parts.shift();
  var mask = parts.shift();
  var MAC = parts.shift();

  if (!address.startsWith('IP Addr: ')) {
    throw new Error("Undefined IP address");
  }

  if (!gateway.startsWith('IP GW: ')) {
    throw new Error("Undefined network gateway");
  }

  if (!mask.startsWith('IP mask: ')) {
    throw new Error("Undefined network mask");
  }

  if (!MAC.startsWith('MAC Address: ')) {
    throw new Error("Undefined MAC address");
  }

  return {
    address: address.slice(9),
    gateway: gateway.slice(7),
    mask: mask.slice(9),
    MAC: MAC.slice(13)
  };
}

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  try {
    return parseResponse(response);
  } catch (error) {
    throw new _UnknownResponseError["default"](usage, error);
  }
}

var netCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.netCommand = netCommand;

},{"../../errors/UnknownResponseError.js":83}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playCommand = void 0;

var _CurrentlyPlayingError = _interopRequireDefault(require("../../errors/CurrentlyPlayingError.js"));

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

var _FileNotFoundError = _interopRequireDefault(require("../../errors/FileNotFoundError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L283
// https://github.com/Smoothieware/Smoothieware/blob/489e577025b6df397ed8d3aa0707ff25e3dd1a97/src/modules/utils/player/Player.cpp#L277
var command = 'play';
var usage = 'play <file>';
var description = 'Play file from SD card';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('Currently printing')) {
    throw new _CurrentlyPlayingError["default"]();
  }

  if (response.startsWith('File not found')) {
    throw new _FileNotFoundError["default"](args[0] || null);
  }

  if (!response.startsWith('Playing')) {
    throw new _UnknownResponseError["default"](usage);
  } // file and size


  var file = args[0];
  var matches = response.match(/File size ([0-9]+)/);
  var size = parseInt(matches[1] || -1); // always return data object

  return {
    message: response,
    file: file,
    size: size
  };
}

var playCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.playCommand = playCommand;

},{"../../errors/CurrentlyPlayingError.js":62,"../../errors/FileNotFoundError.js":63,"../../errors/UnknownResponseError.js":83}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progressCommand = void 0;

var _NotCurrentlyPlayingError = _interopRequireDefault(require("../../errors/NotCurrentlyPlayingError.js"));

var _UnknownFileSizeError = _interopRequireDefault(require("../../errors/UnknownFileSizeError.js"));

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L283
// https://github.com/Smoothieware/Smoothieware/blob/489e577025b6df397ed8d3aa0707ff25e3dd1a97/src/modules/utils/player/Player.cpp#L325
var command = 'progress';
var usage = 'progress [-b]';
var description = 'Get SD or File playing progression';
var printingPattern = /SD printing byte ([0-9]+)\/([0-9]+)/;
var pausedPattern = /SD print is paused at ([0-9]+)\/([0-9]+)/;
var filePattern = /file: ([^,]+), ([0-9]+) % complete, elapsed time: ([0-9:]+)(, est time: ([0-9:]+))?/;

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('Not currently playing')) {
    throw new _NotCurrentlyPlayingError["default"]();
  }

  if (response.startsWith('File size is unknown')) {
    throw new _UnknownFileSizeError["default"]();
  } // SD printing


  var printingMatches = response.match(printingPattern);

  if (printingMatches) {
    var loaded = parseInt(printingMatches[1]);
    var total = parseInt(printingMatches[2]);
    return {
      loaded: loaded,
      total: total,
      percent: Math.round(loaded * 100 / total)
    };
  } // SD paused


  var pausedMatches = response.match(pausedPattern);

  if (pausedMatches) {
    var _loaded = parseInt(pausedMatches[1]);

    var _total = parseInt(pausedMatches[2]);

    return {
      loaded: _loaded,
      total: _total
    };
  } // File progress


  var fileMatches = response.match(filePattern);

  if (fileMatches) {
    var file = fileMatches[1];
    var percent = parseInt(fileMatches[2]);
    var elapsedTime = fileMatches[3];
    var estimatedTime = fileMatches[5] || Infinity;
    return {
      file: file,
      percent: percent,
      elapsedTime: elapsedTime,
      estimatedTime: estimatedTime
    };
  } // throw an error if something goes wrong


  throw new _UnknownResponseError["default"](usage);
}

var progressCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.progressCommand = progressCommand;

},{"../../errors/NotCurrentlyPlayingError.js":70,"../../errors/UnknownFileSizeError.js":82,"../../errors/UnknownResponseError.js":83}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pwdCommand = void 0;
// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L390
var command = 'pwd';
var usage = 'pwd';
var description = 'Get (print) current working directory';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;
  return {
    path: response
  };
}

var pwdCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.pwdCommand = pwdCommand;

},{}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remountCommand = void 0;
// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L341
var command = 'remount';
var usage = 'remount';
var description = 'Remount SD card';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;
  return {
    message: response
  };
}

var remountCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.remountCommand = remountCommand;

},{}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCommand = void 0;
// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L674
var command = 'reset';
var usage = 'reset';
var description = 'Reset the board';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;
  return {
    message: response
  };
}

var resetCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.resetCommand = resetCommand;

},{}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resumeCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

var _NotSuspendedError = _interopRequireDefault(require("../../errors/NotSuspendedError.js"));

var _KillError = _interopRequireDefault(require("../../errors/KillError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L283
// https://github.com/Smoothieware/Smoothieware/blob/489e577025b6df397ed8d3aa0707ff25e3dd1a97/src/modules/utils/player/Player.cpp#L615
var command = 'resume';
var usage = 'resume';
var description = 'Resume the suspended print';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('Not suspended')) {
    throw new _NotSuspendedError["default"]();
  }

  if (response.match(/Resume aborted by kill/)) {
    throw new _KillError["default"]();
  }

  if (!response.match(/Resuming print/)) {
    throw new _UnknownResponseError["default"](usage);
  } // always return data object


  return {
    logs: response.split('\n')
  };
}

var resumeCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.resumeCommand = resumeCommand;

},{"../../errors/KillError.js":66,"../../errors/NotSuspendedError.js":73,"../../errors/UnknownResponseError.js":83}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rmCommand = void 0;

var _CouldNotDeleteError = _interopRequireDefault(require("../../errors/CouldNotDeleteError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L348
var command = 'rm';
var usage = 'rm <file>';
var description = 'Remove a file or an empty folder';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('Could not delete')) {
    throw new _CouldNotDeleteError["default"](args[0] || null);
  } // always return data object


  return {
    path: args[0]
  };
}

var rmCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.rmCommand = rmCommand;

},{"../../errors/CouldNotDeleteError.js":58}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L563
var command = 'save';
var usage = 'save <file>';
var description = 'Saves the specified config-override file';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (!response.startsWith('Settings Stored to ')) {
    throw new _UnknownResponseError["default"](usage);
  } // always return data object


  return {
    file: response.slice(19)
  };
}

var saveCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.saveCommand = saveCommand;

},{"../../errors/UnknownResponseError.js":83}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTempCommand = void 0;

var _UnknownDeviceError = _interopRequireDefault(require("../../errors/UnknownDeviceError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L897
var command = 'set_temp';
var usage = 'set_temp <device> <value>';
var description = 'Set device temperature';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  if (response.endsWith('is not a known temperature device')) {
    throw new _UnknownDeviceError["default"](args[0] || null);
  } // allaways return data object


  return {
    device: args[0],
    value: parseFloat(args[1])
  };
}

var setTempCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.setTempCommand = setTempCommand;

},{"../../errors/UnknownDeviceError.js":81}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suspendCommand = void 0;

var _AlreadySuspendedError = _interopRequireDefault(require("../../errors/AlreadySuspendedError.js"));

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L283
// https://github.com/Smoothieware/Smoothieware/blob/489e577025b6df397ed8d3aa0707ff25e3dd1a97/src/modules/utils/player/Player.cpp#L517
var command = 'suspend';
var usage = 'suspend';
var description = 'Suspend a print in progress';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('Already suspended')) {
    throw new _AlreadySuspendedError["default"]();
  }

  if (!response.startsWith('// Suspending print')) {
    throw new _UnknownResponseError["default"](usage);
  } // always return data object


  return {
    message: response
  };
}

var suspendCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.suspendCommand = suspendCommand;

},{"../../errors/AlreadySuspendedError.js":55,"../../errors/UnknownResponseError.js":83}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

var _UnknownDeviceError = _interopRequireDefault(require("../../errors/UnknownDeviceError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L957
var command = 'switch';
var usage = 'switch <name> [onf|off]';
var description = 'Set or get switch state for a named switch';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  if (response.startsWith('unknown switch') || response.endsWith('is not a known switch device')) {
    throw new _UnknownDeviceError["default"](args[0] || null);
  }

  var matches = response.match(/switch (.*) (?:is|set to:) (.*)/);

  if (!matches || response.startsWith('must be')) {
    throw new _UnknownResponseError["default"](usage);
  }

  var value = matches[2];

  if (matches[2] === '0') {
    value = 'off';
  } else if (matches[2] === '1') {
    value = 'on';
  } // allaways return data object


  return {
    name: matches[1],
    value: value
  };
}

var switchCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.switchCommand = switchCommand;

},{"../../errors/UnknownDeviceError.js":81,"../../errors/UnknownResponseError.js":83}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testCircleCommand = void 0;

var _InvalidArgumentsError = _interopRequireDefault(require("../../errors/InvalidArgumentsError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L1063
var command = 'test circle';
var usage = 'test circle <radius> <iterations> [feedrate]';
var description = 'Draws a circle around origin';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('error:')) {
    throw new _InvalidArgumentsError["default"](args, usage);
  } // always return data object


  return {
    gcode: response.split('\n').slice(0, -1)
  };
}

var testCircleCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.testCircleCommand = testCircleCommand;

},{"../../errors/InvalidArgumentsError.js":64}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testCommand = void 0;

var _UnsupportedSubcommandError = _interopRequireDefault(require("../../errors/UnsupportedSubcommandError.js"));

var _testSquareCommand = require("./testSquareCommand.js");

var _testCircleCommand = require("./testCircleCommand.js");

var _testJogCommand = require("./testJogCommand.js");

var _testRawCommand = require("./testRawCommand.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var command = 'test';
var usage = 'test <square|circle|jog|raw> <...options>';
var description = 'Execute some tests';
var options = ['circle', 'square', 'jog', 'raw'];

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;
  var subcommand = args.shift(); // throw an error if something goes wrong

  if (!options.includes(subcommand)) {
    throw new _UnsupportedSubcommandError["default"](subcommand, usage);
  } // delegate


  switch (subcommand) {
    case 'square':
      return _testSquareCommand.testSquareCommand.parse({
        args: args,
        response: response
      });

    case 'circle':
      return _testCircleCommand.testCircleCommand.parse({
        args: args,
        response: response
      });

    case 'jog':
      return _testJogCommand.testJogCommand.parse({
        args: args,
        response: response
      });

    case 'raw':
      return _testRawCommand.testRawCommand.parse({
        args: args,
        response: response
      });
  }
}

var testCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.testCommand = testCommand;

},{"../../errors/UnsupportedSubcommandError.js":86,"./testCircleCommand.js":45,"./testJogCommand.js":47,"./testRawCommand.js":48,"./testSquareCommand.js":49}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testJogCommand = void 0;

var _InvalidArgumentsError = _interopRequireDefault(require("../../errors/InvalidArgumentsError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L1037
var command = 'test jog';
var usage = 'test jog <axis> <distance> <iterations> [feedrate]';
var description = 'Jogs back and forth from origin';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('error:')) {
    throw new _InvalidArgumentsError["default"](args, usage);
  } // always return data object


  return {
    gcode: response.split('\n').slice(0, -1)
  };
}

var testJogCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.testJogCommand = testJogCommand;

},{"../../errors/InvalidArgumentsError.js":64}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testRawCommand = void 0;

var _InvalidArgumentsError = _interopRequireDefault(require("../../errors/InvalidArgumentsError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L1146
var command = 'test raw';
var usage = 'test raw <axis> <steps> <speed>';
var description = 'Issues raw steps to the specified axis';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('error:')) {
    throw new _InvalidArgumentsError["default"](args, usage);
  } // always return data object


  return {
    axis: args[0],
    steps: parseInt(args[1]),
    speed: parseInt(args[2])
  };
}

var testRawCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.testRawCommand = testRawCommand;

},{"../../errors/InvalidArgumentsError.js":64}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testSquareCommand = void 0;

var _InvalidArgumentsError = _interopRequireDefault(require("../../errors/InvalidArgumentsError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L1103
var command = 'test square';
var usage = 'test square <size> <iterations> [feedrate]';
var description = 'Draws a square from origin';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  // throw an error if something goes wrong
  if (response.startsWith('error:')) {
    throw new _InvalidArgumentsError["default"](args, usage);
  } // always return data object


  return {
    gcode: response.split('\n').slice(0, -1)
  };
}

var testSquareCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.testSquareCommand = testSquareCommand;

},{"../../errors/InvalidArgumentsError.js":64}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thermistorsCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L911
var command = 'thermistors';
var usage = 'thermistors';
var description = 'Get predefined thermistors';

function parseResponse(response) {
  var lines = response.split('\n');
  lines.shift();
  var table = [];
  var beta = [];
  var pointer = table;
  lines.forEach(function (line) {
    if (line.startsWith('Beta table')) {
      pointer = beta;
      return;
    }

    var parts = line.split('-');
    pointer.push({
      id: parseInt(parts[0].trim()),
      name: parts[1].trim()
    });
  });
  return {
    table: table,
    beta: beta
  };
}

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;

  try {
    return parseResponse(response);
  } catch (error) {
    throw new _UnknownResponseError["default"](usage, error);
  }
}

var thermistorsCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.thermistorsCommand = thermistorsCommand;

},{"../../errors/UnknownResponseError.js":83}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadCommand = void 0;

var _CouldNotUploadError = _interopRequireDefault(require("../../errors/CouldNotUploadError.js"));

var _fileFactory = _interopRequireDefault(require("../fileFactory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L466
// https://github.com/Smoothieware/Smoothieware/blob/d82d66f550ce6bdd7f33e8f4998ac6d963fd7376/src/libs/Network/uip/webserver/httpd.c#L340
var command = 'upload';
var usage = 'upload <file>';
var description = 'Saves a stream of text to the named file';

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;
  var name = args[0];
  var file = args[1];
  var path = args[2];

  if (!response.startsWith('OK')) {
    throw new _CouldNotUploadError["default"]("".concat(path, "/").concat(name));
  }

  return (0, _fileFactory["default"])({
    path: path,
    line: "".concat(name, " ").concat(file.size),
    getSize: true
  });
}

var uploadCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.uploadCommand = uploadCommand;

},{"../../errors/CouldNotUploadError.js":61,"../fileFactory.js":3}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.versionCommand = void 0;

var _UnknownResponseError = _interopRequireDefault(require("../../errors/UnknownResponseError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/Smoothieware/Smoothieware/blob/9e5477518b1c85498a68e81be894faea45d6edca/src/modules/utils/simpleshell/SimpleShell.cpp#L652
var command = 'version';
var usage = 'version';
var description = 'Get firmware version'; // version pattern

var versionPattern = /Build version: ([^,]+), Build date: ([^,]+), MCU: ([^,]+), System Clock: ([^\n]+)\n?(([0-5]) axis)?/m;

function parse(_ref) {
  var args = _ref.args,
      response = _ref.response;
  // test the pattern
  var matches = response.match(versionPattern); // throw an error if something goes wrong

  if (!matches) {
    throw new _UnknownResponseError["default"](usage);
  } // split branch-hash on dash


  var branch = matches[1].split('-'); // set some data

  var data = {
    branch: branch[0].trim(),
    hash: branch[1].trim(),
    date: matches[2].trim(),
    mcu: matches[3].trim(),
    clock: matches[4].trim() // axis ?

  };

  if (matches[5]) {
    data.axis = parseInt(matches[6]);
  } // always return an object


  return data;
}

var versionCommand = {
  command: command,
  usage: usage,
  description: description,
  parse: parse
};
exports.versionCommand = versionCommand;

},{"../../errors/UnknownResponseError.js":83}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = use;
exports.usedCommands = void 0;

var _InvalidCommandError = _interopRequireDefault(require("../errors/InvalidCommandError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usedCommands = {};
exports.usedCommands = usedCommands;

function use(command) {
  if (!command.command || !command.parse || typeof command.parse !== 'function') {
    throw new _InvalidCommandError["default"]();
  }

  usedCommands[command.command] = command;
}

},{"../errors/InvalidCommandError.js":65}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SERVER_ERROR = exports.PARALLEL_REQUEST_ERROR = exports.REQUEST_TIMEOUT_ERROR = exports.REQUEST_OPEN_ERROR = exports.REQUEST_ABORTED_ERROR = exports.NETWORK_ERROR = exports.UNSUPPORTED_SUBCOMMAND_ERROR = exports.UNSUPPORTED_PARSER_ERROR = exports.UNSUPPORTED_COMMAND_ERROR = exports.UNKNOWN_RESPONSE_ERROR = exports.UNKNOWN_FILE_SIZE_ERROR = exports.UNKNOWN_DEVICE_ERROR = exports.UNDEFINED_SETTING_ERROR = exports.UNDEFINED_ERROR = exports.NO_LASER_MODULE_ERROR = exports.NO_HEATERS_FOUND_ERROR = exports.NOT_SUSPENDED_ERROR = exports.NOT_ENOUGH_SPACE_ERROR = exports.NOT_CURRENTLY_PLAYING_ERROR = exports.MINIMAL_DURATION_ERROR = exports.KILL_ERROR = exports.INVALID_COMMAND_ERROR = exports.INVALID_ARGUMENTS_ERROR = exports.FILE_NOT_FOUND_ERROR = exports.CURRENTLY_PLAYING_ERROR = exports.COULD_NOT_UPLOAD_ERROR = exports.COULD_NOT_OPEN_ERROR = exports.COULD_NOT_MOVE_ERROR = exports.COULD_NOT_DELETE_ERROR = exports.COULD_NOT_CREATE_ERROR = exports.ALREADY_SUSPENDED_ERROR = void 0;
var ALREADY_SUSPENDED_ERROR = 'ALREADY_SUSPENDED_ERROR';
exports.ALREADY_SUSPENDED_ERROR = ALREADY_SUSPENDED_ERROR;
var COULD_NOT_CREATE_ERROR = 'COULD_NOT_CREATE_ERROR';
exports.COULD_NOT_CREATE_ERROR = COULD_NOT_CREATE_ERROR;
var COULD_NOT_DELETE_ERROR = 'COULD_NOT_DELETE_ERROR';
exports.COULD_NOT_DELETE_ERROR = COULD_NOT_DELETE_ERROR;
var COULD_NOT_MOVE_ERROR = 'COULD_NOT_MOVE_ERROR';
exports.COULD_NOT_MOVE_ERROR = COULD_NOT_MOVE_ERROR;
var COULD_NOT_OPEN_ERROR = 'COULD_NOT_OPEN_ERROR';
exports.COULD_NOT_OPEN_ERROR = COULD_NOT_OPEN_ERROR;
var COULD_NOT_UPLOAD_ERROR = 'COULD_NOT_UPLOAD_ERROR';
exports.COULD_NOT_UPLOAD_ERROR = COULD_NOT_UPLOAD_ERROR;
var CURRENTLY_PLAYING_ERROR = 'CURRENTLY_PLAYING_ERROR';
exports.CURRENTLY_PLAYING_ERROR = CURRENTLY_PLAYING_ERROR;
var FILE_NOT_FOUND_ERROR = 'FILE_NOT_FOUND_ERROR';
exports.FILE_NOT_FOUND_ERROR = FILE_NOT_FOUND_ERROR;
var INVALID_ARGUMENTS_ERROR = 'INVALID_ARGUMENTS_ERROR';
exports.INVALID_ARGUMENTS_ERROR = INVALID_ARGUMENTS_ERROR;
var INVALID_COMMAND_ERROR = 'INVALID_COMMAND_ERROR';
exports.INVALID_COMMAND_ERROR = INVALID_COMMAND_ERROR;
var KILL_ERROR = 'KILL_ERROR';
exports.KILL_ERROR = KILL_ERROR;
var MINIMAL_DURATION_ERROR = 'MINIMAL_DURATION_ERROR';
exports.MINIMAL_DURATION_ERROR = MINIMAL_DURATION_ERROR;
var NOT_CURRENTLY_PLAYING_ERROR = 'NOT_CURRENTLY_PLAYING_ERROR';
exports.NOT_CURRENTLY_PLAYING_ERROR = NOT_CURRENTLY_PLAYING_ERROR;
var NOT_ENOUGH_SPACE_ERROR = 'NOT_ENOUGH_SPACE_ERROR';
exports.NOT_ENOUGH_SPACE_ERROR = NOT_ENOUGH_SPACE_ERROR;
var NOT_SUSPENDED_ERROR = 'NOT_SUSPENDED_ERROR';
exports.NOT_SUSPENDED_ERROR = NOT_SUSPENDED_ERROR;
var NO_HEATERS_FOUND_ERROR = 'NO_HEATERS_FOUND_ERROR';
exports.NO_HEATERS_FOUND_ERROR = NO_HEATERS_FOUND_ERROR;
var NO_LASER_MODULE_ERROR = 'NO_LASER_MODULE_ERROR';
exports.NO_LASER_MODULE_ERROR = NO_LASER_MODULE_ERROR;
var UNDEFINED_ERROR = 'UNDEFINED_ERROR';
exports.UNDEFINED_ERROR = UNDEFINED_ERROR;
var UNDEFINED_SETTING_ERROR = 'UNDEFINED_SETTING_ERROR';
exports.UNDEFINED_SETTING_ERROR = UNDEFINED_SETTING_ERROR;
var UNKNOWN_DEVICE_ERROR = 'UNKNOWN_DEVICE_ERROR';
exports.UNKNOWN_DEVICE_ERROR = UNKNOWN_DEVICE_ERROR;
var UNKNOWN_FILE_SIZE_ERROR = 'UNKNOWN_FILE_SIZE_ERROR';
exports.UNKNOWN_FILE_SIZE_ERROR = UNKNOWN_FILE_SIZE_ERROR;
var UNKNOWN_RESPONSE_ERROR = 'UNKNOWN_RESPONSE_ERROR';
exports.UNKNOWN_RESPONSE_ERROR = UNKNOWN_RESPONSE_ERROR;
var UNSUPPORTED_COMMAND_ERROR = 'UNSUPPORTED_COMMAND_ERROR';
exports.UNSUPPORTED_COMMAND_ERROR = UNSUPPORTED_COMMAND_ERROR;
var UNSUPPORTED_PARSER_ERROR = 'UNSUPPORTED_PARSER_ERROR';
exports.UNSUPPORTED_PARSER_ERROR = UNSUPPORTED_PARSER_ERROR;
var UNSUPPORTED_SUBCOMMAND_ERROR = 'UNSUPPORTED_SUBCOMMAND_ERROR'; // RequestError

exports.UNSUPPORTED_SUBCOMMAND_ERROR = UNSUPPORTED_SUBCOMMAND_ERROR;
var NETWORK_ERROR = 'NETWORK_ERROR';
exports.NETWORK_ERROR = NETWORK_ERROR;
var REQUEST_ABORTED_ERROR = 'REQUEST_ABORTED_ERROR';
exports.REQUEST_ABORTED_ERROR = REQUEST_ABORTED_ERROR;
var REQUEST_OPEN_ERROR = 'REQUEST_OPEN_ERROR';
exports.REQUEST_OPEN_ERROR = REQUEST_OPEN_ERROR;
var REQUEST_TIMEOUT_ERROR = 'REQUEST_TIMEOUT_ERROR';
exports.REQUEST_TIMEOUT_ERROR = REQUEST_TIMEOUT_ERROR;
var PARALLEL_REQUEST_ERROR = 'PARALLEL_REQUEST_ERROR';
exports.PARALLEL_REQUEST_ERROR = PARALLEL_REQUEST_ERROR;
var SERVER_ERROR = 'SERVER_ERROR';
exports.SERVER_ERROR = SERVER_ERROR;

},{}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AlreadySuspendedError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(AlreadySuspendedError, _CommandError);

  function AlreadySuspendedError() {
    _classCallCheck(this, AlreadySuspendedError);

    return _possibleConstructorReturn(this, _getPrototypeOf(AlreadySuspendedError).call(this, {
      name: 'AlreadySuspendedError',
      type: _errorTypes.ALREADY_SUSPENDED_ERROR,
      message: 'Already suspended.'
    }));
  }

  return AlreadySuspendedError;
}(_CommandError2["default"]);

exports["default"] = AlreadySuspendedError;

},{"../error-types.js":54,"./CommandError.js":56}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _errorTypes = require("../error-types.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CommandError =
/*#__PURE__*/
function (_Error) {
  _inherits(CommandError, _Error);

  function CommandError(_ref) {
    var _this;

    var message = _ref.message,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'CommandError' : _ref$name,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? _errorTypes.UNDEFINED_ERROR : _ref$type;

    _classCallCheck(this, CommandError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommandError).call(this, message));
    _this.name = name;
    _this.type = type;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor);
    } else {
      _this.stack = new Error(message).stack;
    }

    return _this;
  }

  return CommandError;
}(_wrapNativeSuper(Error));

exports["default"] = CommandError;

},{"../error-types.js":54}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CouldNotCreateError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(CouldNotCreateError, _CommandError);

  function CouldNotCreateError(what) {
    _classCallCheck(this, CouldNotCreateError);

    return _possibleConstructorReturn(this, _getPrototypeOf(CouldNotCreateError).call(this, {
      name: 'CouldNotCreateError',
      type: _errorTypes.COULD_NOT_CREATE_ERROR,
      message: "Could not create [".concat(what, "].")
    }));
  }

  return CouldNotCreateError;
}(_CommandError2["default"]);

exports["default"] = CouldNotCreateError;

},{"../error-types.js":54,"./CommandError.js":56}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CouldNotDeleteError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(CouldNotDeleteError, _CommandError);

  function CouldNotDeleteError(what) {
    _classCallCheck(this, CouldNotDeleteError);

    return _possibleConstructorReturn(this, _getPrototypeOf(CouldNotDeleteError).call(this, {
      name: 'CouldNotDeleteError',
      type: _errorTypes.COULD_NOT_DELETE_ERROR,
      message: "Could not delete [".concat(what, "].")
    }));
  }

  return CouldNotDeleteError;
}(_CommandError2["default"]);

exports["default"] = CouldNotDeleteError;

},{"../error-types.js":54,"./CommandError.js":56}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CouldNotMoveError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(CouldNotMoveError, _CommandError);

  function CouldNotMoveError(source, target) {
    _classCallCheck(this, CouldNotMoveError);

    return _possibleConstructorReturn(this, _getPrototypeOf(CouldNotMoveError).call(this, {
      name: 'CouldNotMoveError',
      type: _errorTypes.COULD_NOT_MOVE_ERROR,
      message: "Could not move [".concat(source, "] to [").concat(target, "].")
    }));
  }

  return CouldNotMoveError;
}(_CommandError2["default"]);

exports["default"] = CouldNotMoveError;

},{"../error-types.js":54,"./CommandError.js":56}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CouldNotOpenError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(CouldNotOpenError, _CommandError);

  function CouldNotOpenError(file) {
    _classCallCheck(this, CouldNotOpenError);

    return _possibleConstructorReturn(this, _getPrototypeOf(CouldNotOpenError).call(this, {
      name: 'CouldNotOpenError',
      type: _errorTypes.COULD_NOT_OPEN_ERROR,
      message: "Could not open [".concat(file, "].")
    }));
  }

  return CouldNotOpenError;
}(_CommandError2["default"]);

exports["default"] = CouldNotOpenError;

},{"../error-types.js":54,"./CommandError.js":56}],61:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CouldNotUploadError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(CouldNotUploadError, _CommandError);

  function CouldNotUploadError(what) {
    _classCallCheck(this, CouldNotUploadError);

    return _possibleConstructorReturn(this, _getPrototypeOf(CouldNotUploadError).call(this, {
      name: 'CouldNotUploadError',
      type: _errorTypes.COULD_NOT_UPLOAD_ERROR,
      message: "Could not upload [".concat(what, "].")
    }));
  }

  return CouldNotUploadError;
}(_CommandError2["default"]);

exports["default"] = CouldNotUploadError;

},{"../error-types.js":54,"./CommandError.js":56}],62:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CurrentlyPlayingError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(CurrentlyPlayingError, _CommandError);

  function CurrentlyPlayingError() {
    _classCallCheck(this, CurrentlyPlayingError);

    return _possibleConstructorReturn(this, _getPrototypeOf(CurrentlyPlayingError).call(this, {
      name: 'CurrentlyPlayingError',
      type: _errorTypes.CURRENTLY_PLAYING_ERROR,
      message: 'Currently printing, suspend or abord first.'
    }));
  }

  return CurrentlyPlayingError;
}(_CommandError2["default"]);

exports["default"] = CurrentlyPlayingError;

},{"../error-types.js":54,"./CommandError.js":56}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FileNotFoundError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(FileNotFoundError, _CommandError);

  function FileNotFoundError(file) {
    _classCallCheck(this, FileNotFoundError);

    return _possibleConstructorReturn(this, _getPrototypeOf(FileNotFoundError).call(this, {
      name: 'FileNotFoundError',
      type: _errorTypes.FILE_NOT_FOUND_ERROR,
      message: "File not found [".concat(file, "].")
    }));
  }

  return FileNotFoundError;
}(_CommandError2["default"]);

exports["default"] = FileNotFoundError;

},{"../error-types.js":54,"./CommandError.js":56}],64:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InvalidArgumentsError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(InvalidArgumentsError, _CommandError);

  function InvalidArgumentsError(args, usage) {
    _classCallCheck(this, InvalidArgumentsError);

    return _possibleConstructorReturn(this, _getPrototypeOf(InvalidArgumentsError).call(this, {
      name: 'InvalidArgumentsError',
      type: _errorTypes.INVALID_ARGUMENTS_ERROR,
      message: "Invalid arguments [".concat(args.join(' '), "].\nUsage: ").concat(usage)
    }));
  }

  return InvalidArgumentsError;
}(_CommandError2["default"]);

exports["default"] = InvalidArgumentsError;

},{"../error-types.js":54,"./CommandError.js":56}],65:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InvalidCommandError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(InvalidCommandError, _CommandError);

  function InvalidCommandError() {
    _classCallCheck(this, InvalidCommandError);

    return _possibleConstructorReturn(this, _getPrototypeOf(InvalidCommandError).call(this, {
      name: 'InvalidCommandError',
      type: _errorTypes.INVALID_COMMAND_ERROR,
      message: 'Command must contain [command] and [parse] properties.'
    }));
  }

  return InvalidCommandError;
}(_CommandError2["default"]);

exports["default"] = InvalidCommandError;

},{"../error-types.js":54,"./CommandError.js":56}],66:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var KillError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(KillError, _CommandError);

  function KillError() {
    _classCallCheck(this, KillError);

    return _possibleConstructorReturn(this, _getPrototypeOf(KillError).call(this, {
      name: 'KillError',
      type: _errorTypes.KILL_ERROR,
      message: 'KILLED'
    }));
  }

  return KillError;
}(_CommandError2["default"]);

exports["default"] = KillError;

},{"../error-types.js":54,"./CommandError.js":56}],67:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MinimalDurationError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(MinimalDurationError, _CommandError);

  function MinimalDurationError(duration) {
    _classCallCheck(this, MinimalDurationError);

    return _possibleConstructorReturn(this, _getPrototypeOf(MinimalDurationError).call(this, {
      name: 'MinimalDurationError',
      type: _errorTypes.MINIMAL_DURATION_ERROR,
      message: "Minimal duration is [".concat(duration, "] ms.")
    }));
  }

  return MinimalDurationError;
}(_CommandError2["default"]);

exports["default"] = MinimalDurationError;

},{"../error-types.js":54,"./CommandError.js":56}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RequestError2 = _interopRequireDefault(require("./RequestError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NetworkError =
/*#__PURE__*/
function (_RequestError) {
  _inherits(NetworkError, _RequestError);

  function NetworkError(_ref) {
    var response = _ref.response;

    _classCallCheck(this, NetworkError);

    return _possibleConstructorReturn(this, _getPrototypeOf(NetworkError).call(this, {
      response: response,
      name: 'NetworkError',
      type: _errorTypes.NETWORK_ERROR,
      message: 'Network error.'
    }));
  }

  return NetworkError;
}(_RequestError2["default"]);

exports["default"] = NetworkError;

},{"../error-types.js":54,"./RequestError.js":76}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NoLaserModuleError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(NoLaserModuleError, _CommandError);

  function NoLaserModuleError() {
    _classCallCheck(this, NoLaserModuleError);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoLaserModuleError).call(this, {
      name: 'NoLaserModuleError',
      type: _errorTypes.NO_LASER_MODULE_ERROR,
      message: 'No laser module, edit config file to enable.'
    }));
  }

  return NoLaserModuleError;
}(_CommandError2["default"]);

exports["default"] = NoLaserModuleError;

},{"../error-types.js":54,"./CommandError.js":56}],70:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NotCurrentlyPlayingError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(NotCurrentlyPlayingError, _CommandError);

  function NotCurrentlyPlayingError() {
    _classCallCheck(this, NotCurrentlyPlayingError);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotCurrentlyPlayingError).call(this, {
      name: 'NotCurrentlyPlayingError',
      type: _errorTypes.NOT_CURRENTLY_PLAYING_ERROR,
      message: 'Not currently playing.'
    }));
  }

  return NotCurrentlyPlayingError;
}(_CommandError2["default"]);

exports["default"] = NotCurrentlyPlayingError;

},{"../error-types.js":54,"./CommandError.js":56}],71:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NotEnoughSpaceError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(NotEnoughSpaceError, _CommandError);

  function NotEnoughSpaceError(what) {
    _classCallCheck(this, NotEnoughSpaceError);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotEnoughSpaceError).call(this, {
      name: 'NotEnoughSpaceError',
      type: _errorTypes.NOT_ENOUGH_SPACE_ERROR,
      message: "Not enough space to overwrite [".concat(what, "].")
    }));
  }

  return NotEnoughSpaceError;
}(_CommandError2["default"]);

exports["default"] = NotEnoughSpaceError;

},{"../error-types.js":54,"./CommandError.js":56}],72:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NotHeatersFoundError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(NotHeatersFoundError, _CommandError);

  function NotHeatersFoundError() {
    _classCallCheck(this, NotHeatersFoundError);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotHeatersFoundError).call(this, {
      name: 'NotHeatersFoundError',
      type: _errorTypes.NO_HEATERS_FOUND_ERROR,
      message: 'No heaters found.'
    }));
  }

  return NotHeatersFoundError;
}(_CommandError2["default"]);

exports["default"] = NotHeatersFoundError;

},{"../error-types.js":54,"./CommandError.js":56}],73:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NotSuspendedError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(NotSuspendedError, _CommandError);

  function NotSuspendedError() {
    _classCallCheck(this, NotSuspendedError);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotSuspendedError).call(this, {
      name: 'NotSuspendedError',
      type: _errorTypes.NOT_SUSPENDED_ERROR,
      message: 'Not suspended play.'
    }));
  }

  return NotSuspendedError;
}(_CommandError2["default"]);

exports["default"] = NotSuspendedError;

},{"../error-types.js":54,"./CommandError.js":56}],74:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RequestError2 = _interopRequireDefault(require("./RequestError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ParallelRequestError =
/*#__PURE__*/
function (_RequestError) {
  _inherits(ParallelRequestError, _RequestError);

  function ParallelRequestError(_ref) {
    var response = _ref.response;

    _classCallCheck(this, ParallelRequestError);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParallelRequestError).call(this, {
      response: response,
      name: 'ParallelRequestError',
      type: _errorTypes.PARALLEL_REQUEST_ERROR,
      message: 'Parallel request prohibited. Please wait for the end of a request before sending another.'
    }));
  }

  return ParallelRequestError;
}(_RequestError2["default"]);

exports["default"] = ParallelRequestError;

},{"../error-types.js":54,"./RequestError.js":76}],75:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RequestError2 = _interopRequireDefault(require("./RequestError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RequestAbortedError =
/*#__PURE__*/
function (_RequestError) {
  _inherits(RequestAbortedError, _RequestError);

  function RequestAbortedError(_ref) {
    var response = _ref.response;

    _classCallCheck(this, RequestAbortedError);

    return _possibleConstructorReturn(this, _getPrototypeOf(RequestAbortedError).call(this, {
      response: response,
      name: 'RequestAbortedError',
      type: _errorTypes.REQUEST_ABORTED_ERROR,
      message: 'Request aborted.'
    }));
  }

  return RequestAbortedError;
}(_RequestError2["default"]);

exports["default"] = RequestAbortedError;

},{"../error-types.js":54,"./RequestError.js":76}],76:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _errorTypes = require("../error-types.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RequestError =
/*#__PURE__*/
function (_Error) {
  _inherits(RequestError, _Error);

  function RequestError(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'RequestError' : _ref$name,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? _errorTypes.UNDEFINED_ERROR : _ref$type,
        message = _ref.message,
        response = _ref.response,
        _ref$parentError = _ref.parentError,
        parentError = _ref$parentError === void 0 ? null : _ref$parentError;

    _classCallCheck(this, RequestError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RequestError).call(this, message));
    _this.name = name;
    _this.type = type;
    _this.response = response;
    _this.parentError = parentError;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor);
    } else {
      _this.stack = new Error(message).stack;
    }

    return _this;
  }

  return RequestError;
}(_wrapNativeSuper(Error));

exports["default"] = RequestError;

},{"../error-types.js":54}],77:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RequestError2 = _interopRequireDefault(require("./RequestError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RequestOpenError =
/*#__PURE__*/
function (_RequestError) {
  _inherits(RequestOpenError, _RequestError);

  function RequestOpenError(_ref) {
    var message = _ref.message,
        response = _ref.response;

    _classCallCheck(this, RequestOpenError);

    return _possibleConstructorReturn(this, _getPrototypeOf(RequestOpenError).call(this, {
      response: response,
      name: 'RequestOpenError',
      type: _errorTypes.REQUEST_OPEN_ERROR,
      message: message
    }));
  }

  return RequestOpenError;
}(_RequestError2["default"]);

exports["default"] = RequestOpenError;

},{"../error-types.js":54,"./RequestError.js":76}],78:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RequestError2 = _interopRequireDefault(require("./RequestError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RequestTimeoutError =
/*#__PURE__*/
function (_RequestError) {
  _inherits(RequestTimeoutError, _RequestError);

  function RequestTimeoutError(_ref) {
    var timeout = _ref.timeout,
        response = _ref.response;

    _classCallCheck(this, RequestTimeoutError);

    return _possibleConstructorReturn(this, _getPrototypeOf(RequestTimeoutError).call(this, {
      response: response,
      name: 'RequestTimeoutError',
      type: _errorTypes.REQUEST_TIMEOUT_ERROR,
      message: "Timeout of [".concat(timeout, "] ms exceeded.")
    }));
  }

  return RequestTimeoutError;
}(_RequestError2["default"]);

exports["default"] = RequestTimeoutError;

},{"../error-types.js":54,"./RequestError.js":76}],79:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RequestError2 = _interopRequireDefault(require("./RequestError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ServerError =
/*#__PURE__*/
function (_RequestError) {
  _inherits(ServerError, _RequestError);

  function ServerError(_ref) {
    var status = _ref.status,
        response = _ref.response;

    _classCallCheck(this, ServerError);

    return _possibleConstructorReturn(this, _getPrototypeOf(ServerError).call(this, {
      response: response,
      name: 'ServerError',
      type: _errorTypes.SERVER_ERROR,
      message: "Server error [".concat(status, "].")
    }));
  }

  return ServerError;
}(_RequestError2["default"]);

exports["default"] = ServerError;

},{"../error-types.js":54,"./RequestError.js":76}],80:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UndefinedSettingError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(UndefinedSettingError, _CommandError);

  function UndefinedSettingError(setting, usage) {
    _classCallCheck(this, UndefinedSettingError);

    return _possibleConstructorReturn(this, _getPrototypeOf(UndefinedSettingError).call(this, {
      name: 'UndefinedSettingError',
      type: _errorTypes.UNDEFINED_SETTING_ERROR,
      message: "Undefined setting [".concat(setting, "].\nUsage: ").concat(usage)
    }));
  }

  return UndefinedSettingError;
}(_CommandError2["default"]);

exports["default"] = UndefinedSettingError;

},{"../error-types.js":54,"./CommandError.js":56}],81:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UnknownDeviceError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(UnknownDeviceError, _CommandError);

  function UnknownDeviceError(device) {
    _classCallCheck(this, UnknownDeviceError);

    return _possibleConstructorReturn(this, _getPrototypeOf(UnknownDeviceError).call(this, {
      name: 'UnknownDeviceError',
      type: _errorTypes.UNKNOWN_DEVICE_ERROR,
      message: "Unknown device [".concat(device, "].")
    }));
  }

  return UnknownDeviceError;
}(_CommandError2["default"]);

exports["default"] = UnknownDeviceError;

},{"../error-types.js":54,"./CommandError.js":56}],82:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UnknownFileSizeError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(UnknownFileSizeError, _CommandError);

  function UnknownFileSizeError() {
    _classCallCheck(this, UnknownFileSizeError);

    return _possibleConstructorReturn(this, _getPrototypeOf(UnknownFileSizeError).call(this, {
      name: 'UnknownFileSizeError',
      type: _errorTypes.UNKNOWN_FILE_SIZE_ERROR,
      message: 'Unknown file size.'
    }));
  }

  return UnknownFileSizeError;
}(_CommandError2["default"]);

exports["default"] = UnknownFileSizeError;

},{"../error-types.js":54,"./CommandError.js":56}],83:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UnknownResponseError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(UnknownResponseError, _CommandError);

  function UnknownResponseError(usage, error) {
    var _this;

    _classCallCheck(this, UnknownResponseError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnknownResponseError).call(this, {
      name: 'UnknownResponseError',
      type: _errorTypes.UNKNOWN_RESPONSE_ERROR,
      message: "Unknown response.\nUsage: ".concat(usage)
    }));
    _this.parentError = error || null;
    return _this;
  }

  return UnknownResponseError;
}(_CommandError2["default"]);

exports["default"] = UnknownResponseError;

},{"../error-types.js":54,"./CommandError.js":56}],84:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UnsupportedCommandError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(UnsupportedCommandError, _CommandError);

  function UnsupportedCommandError(command) {
    _classCallCheck(this, UnsupportedCommandError);

    return _possibleConstructorReturn(this, _getPrototypeOf(UnsupportedCommandError).call(this, {
      name: 'UnsupportedCommandError',
      type: _errorTypes.UNSUPPORTED_COMMAND_ERROR,
      message: "Unsupported command [".concat(command, "].")
    }));
  }

  return UnsupportedCommandError;
}(_CommandError2["default"]);

exports["default"] = UnsupportedCommandError;

},{"../error-types.js":54,"./CommandError.js":56}],85:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UnsupportedParserError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(UnsupportedParserError, _CommandError);

  function UnsupportedParserError(command) {
    _classCallCheck(this, UnsupportedParserError);

    return _possibleConstructorReturn(this, _getPrototypeOf(UnsupportedParserError).call(this, {
      name: 'UnsupportedParserError',
      type: _errorTypes.UNSUPPORTED_PARSER_ERROR,
      message: "The command parser for [".concat(command, "] is not yet supported.")
    }));
  }

  return UnsupportedParserError;
}(_CommandError2["default"]);

exports["default"] = UnsupportedParserError;

},{"../error-types.js":54,"./CommandError.js":56}],86:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CommandError2 = _interopRequireDefault(require("./CommandError.js"));

var _errorTypes = require("../error-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UnsupportedSubcommandError =
/*#__PURE__*/
function (_CommandError) {
  _inherits(UnsupportedSubcommandError, _CommandError);

  function UnsupportedSubcommandError(subcommand, usage) {
    _classCallCheck(this, UnsupportedSubcommandError);

    return _possibleConstructorReturn(this, _getPrototypeOf(UnsupportedSubcommandError).call(this, {
      name: 'UnsupportedSubcommandError',
      type: _errorTypes.UNSUPPORTED_SUBCOMMAND_ERROR,
      message: "Unsupported subcommand [".concat(subcommand, "].\nUsage: ").concat(usage)
    }));
  }

  return UnsupportedSubcommandError;
}(_CommandError2["default"]);

exports["default"] = UnsupportedSubcommandError;

},{"../error-types.js":54,"./CommandError.js":56}],87:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = command;
Object.defineProperty(exports, "use", {
  enumerable: true,
  get: function get() {
    return _use["default"];
  }
});

var _UnsupportedCommandError = _interopRequireDefault(require("../../errors/UnsupportedCommandError.js"));

var _RequestError = _interopRequireDefault(require("../../errors/RequestError.js"));

var _responseFactory = _interopRequireDefault(require("../request/responseFactory.js"));

var _post = _interopRequireDefault(require("../request/post.js"));

var _use = _interopRequireDefault(require("../../commands/use.js"));

var _parse = _interopRequireDefault(require("../../commands/parse.js"));

var _upload = _interopRequireDefault(require("./upload.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function command() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      address = _ref.address,
      command = _ref.command,
      _ref$args = _ref.args,
      args = _ref$args === void 0 ? [] : _ref$args,
      rest = _objectWithoutProperties(_ref, ["address", "command", "args"]);

  var argsString = args.length ? " ".concat(args.join(' ')) : '';

  var params = _objectSpread({}, rest, {
    address: address,
    command: command,
    args: args,
    url: "http://".concat(address, "/command"),
    data: "".concat(command).concat(argsString, "\n") // SPECIALS CASES ---------------------
    // break command

  });

  if (command === 'break') {
    // break is immediate and never return
    (0, _post["default"])(params); // send break command, and return a fake response

    var response = (0, _responseFactory["default"])({
      params: params,
      xhr: new XMLHttpRequest()
    });
    return Promise.resolve(_objectSpread({}, response, {
      data: {
        message: 'Entering MRI debug mode...'
      }
    }));
  } // upload command


  if (command === 'upload') {
    var path = args[0] || undefined;
    var name = args[1] || undefined;
    var file = args[2] || undefined;
    var slice = 3;

    if (args.length === 2) {
      file = name;
      name = path;
      path = undefined;
      slice = 2;
    }

    if (typeof file === 'string') {
      file = args.slice(slice).join(' ');
    }

    return (0, _upload["default"])(_objectSpread({}, params, {
      name: name,
      file: file,
      path: path
    }));
  } // END SPECIALS CASES ---------------
  // sent the request


  return (0, _post["default"])(params).then(function (response) {
    try {
      response.text = response.text.trim();

      if (response.text.startsWith('error:Unsupported command')) {
        throw new _UnsupportedCommandError["default"](command);
      }

      response.data = (0, _parse["default"])({
        command: command,
        args: args,
        response: response.text.trim()
      });
    } catch (error) {
      throw new _RequestError["default"]({
        type: error.type || error.name,
        message: error.message,
        parentError: error,
        response: response
      });
    }

    return response;
  });
}

},{"../../commands/parse.js":6,"../../commands/use.js":53,"../../errors/RequestError.js":76,"../../errors/UnsupportedCommandError.js":84,"../request/post.js":93,"../request/responseFactory.js":95,"./upload.js":89}],88:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "command", {
  enumerable: true,
  get: function get() {
    return _command["default"];
  }
});
Object.defineProperty(exports, "upload", {
  enumerable: true,
  get: function get() {
    return _upload["default"];
  }
});
exports["default"] = void 0;

var _command = _interopRequireDefault(require("./command.js"));

var _upload = _interopRequireDefault(require("./upload.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _command["default"];
exports["default"] = _default;

},{"./command.js":87,"./upload.js":89}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = upload;

var _uploadCommand = require("../../commands/parsers/uploadCommand.js");

var _RequestError = _interopRequireDefault(require("../../errors/RequestError.js"));

var _post = _interopRequireDefault(require("../request/post.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function upload() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      address = _ref.address,
      file = _ref.file,
      name = _ref.name,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? '/sd' : _ref$path,
      rest = _objectWithoutProperties(_ref, ["address", "file", "name", "path"]);

  // file is a string, make a Blob
  if (typeof file === 'string') {
    // normalize line endding
    file = file.replace(/\r\n/g, '\n'); // force EOF

    if (file[file.length - 1] !== '\n') {
      file += '\n';
    } // convert to Blob object


    file = new Blob([file], {
      'type': 'text/plain'
    });
  } // normalize path


  name = name.replace(/^\/|\/$/g, '');
  path = path.replace(/^\/|\/$/g, '');
  var fileName = "/".concat(path, "/").concat(name);
  var parts = fileName.split('/');
  name = parts.pop();
  path = parts.join('/');
  fileName = fileName.replace(/^\/sd\//, ''); // set params

  var params = _objectSpread({}, rest, {
    address: address,
    file: file,
    name: name,
    path: path,
    headers: [['X-Filename', fileName]],
    url: "http://".concat(address, "/upload"),
    data: file,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300 || status === 503;
    }
  }); // post upload


  return (0, _post["default"])(params).then(function (response) {
    try {
      response.data = _uploadCommand.uploadCommand.parse({
        command: 'upload',
        args: [name, file, path],
        response: response.text.trim()
      });
    } catch (error) {
      throw new _RequestError["default"]({
        type: error.type || error.name,
        message: error.message,
        parentError: error,
        response: response
      });
    }

    return response;
  });
}

},{"../../commands/parsers/uploadCommand.js":51,"../../errors/RequestError.js":76,"../request/post.js":93}],90:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  errorTypes: true
};
exports.errorTypes = void 0;

var errorTypes = _interopRequireWildcard(require("../error-types.js"));

exports.errorTypes = errorTypes;

var _index = require("./request/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

var _index2 = require("./command/index.js");

Object.keys(_index2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index2[key];
    }
  });
});

var _index3 = require("../commands/index.js");

Object.keys(_index3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index3[key];
    }
  });
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

},{"../commands/index.js":5,"../error-types.js":54,"./command/index.js":88,"./request/index.js":92}],91:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = get;

var _request = _interopRequireDefault(require("./request.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function get() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request["default"])(_objectSpread({}, params, {
    method: 'GET'
  }));
}

},{"./request.js":94}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "request", {
  enumerable: true,
  get: function get() {
    return _request["default"];
  }
});
Object.defineProperty(exports, "post", {
  enumerable: true,
  get: function get() {
    return _post["default"];
  }
});
Object.defineProperty(exports, "get", {
  enumerable: true,
  get: function get() {
    return _get["default"];
  }
});
exports["default"] = void 0;

var _request = _interopRequireDefault(require("./request.js"));

var _post = _interopRequireDefault(require("./post.js"));

var _get = _interopRequireDefault(require("./get.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _request["default"];
exports["default"] = _default;

},{"./get.js":91,"./post.js":93,"./request.js":94}],93:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = post;

var _request = _interopRequireDefault(require("./request.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function post() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request["default"])(_objectSpread({}, params, {
    method: 'POST'
  }));
}

},{"./request.js":94}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSent = isSent;
exports["default"] = request;

var _responseFactory = _interopRequireDefault(require("../request/responseFactory.js"));

var _RequestOpenError = _interopRequireDefault(require("../../errors/RequestOpenError.js"));

var _RequestTimeoutError = _interopRequireDefault(require("../../errors/RequestTimeoutError.js"));

var _RequestAbortedError = _interopRequireDefault(require("../../errors/RequestAbortedError.js"));

var _ParallelRequestError = _interopRequireDefault(require("../../errors/ParallelRequestError.js"));

var _NetworkError = _interopRequireDefault(require("../../errors/NetworkError.js"));

var _ServerError = _interopRequireDefault(require("../../errors/ServerError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var sent = {};

function isSent(address) {
  return !!sent[address];
}

function request() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'POST' : _ref$method,
      _ref$url = _ref.url,
      url = _ref$url === void 0 ? '/' : _ref$url,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? null : _ref$data,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 0 : _ref$timeout,
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? null : _ref$headers,
      _ref$beforeSend = _ref.beforeSend,
      beforeSend = _ref$beforeSend === void 0 ? null : _ref$beforeSend,
      _ref$onUploadProgress = _ref.onUploadProgress,
      onUploadProgress = _ref$onUploadProgress === void 0 ? null : _ref$onUploadProgress,
      _ref$validateStatus = _ref.validateStatus,
      validateStatus = _ref$validateStatus === void 0 ? function (status) {
    return status >= 200 && status < 300;
  } : _ref$validateStatus,
      userData = _objectWithoutProperties(_ref, ["method", "url", "data", "timeout", "headers", "beforeSend", "onUploadProgress", "validateStatus"]);

  // force http protocol
  if (!url.startsWith('http://')) {
    url = "http://".concat(url);
  } // request params


  var params = {
    method: method,
    url: url,
    data: data,
    userData: userData,
    timeout: timeout,
    headers: headers,
    beforeSend: beforeSend,
    onUploadProgress: onUploadProgress,
    validateStatus: validateStatus // create and return a Promise

  };
  return new Promise(function (resolve, reject) {
    // create http request object
    var xhr = new XMLHttpRequest(); // extract address

    var matches = url.match(/http:\/\/([^/]+)/);
    var address = matches ? matches[1] : 'localhost'; // open the request (async)

    try {
      xhr.open(method, url, true);
    } catch (error) {
      var response = (0, _responseFactory["default"])({
        params: params,
        xhr: xhr
      });
      return reject(new _RequestOpenError["default"]({
        message: error.message,
        response: response
      }));
    } // set timeout


    xhr.timeout = timeout; // set headers

    if (headers) {
      headers.forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            val = _ref3[1];

        return xhr.setRequestHeader(key, val);
      });
    } // on ready state change


    xhr.onreadystatechange = function onReadyStateChange() {
      if (!xhr || xhr.readyState !== 4) return;
      if (xhr.status === 0) return; // => onError

      sent[address] = false;

      if (validateStatus(xhr.status)) {
        resolve((0, _responseFactory["default"])({
          params: params,
          xhr: xhr
        }));
      } else {
        var _response = (0, _responseFactory["default"])({
          params: params,
          xhr: xhr
        });

        reject(new _ServerError["default"]({
          status: xhr.status,
          response: _response
        }));
      }

      xhr = null;
    }; // on network errors


    xhr.onerror = function onError() {
      sent[address] = false;
      var response = (0, _responseFactory["default"])({
        params: params,
        xhr: xhr
      });
      reject(new _NetworkError["default"]({
        response: response
      }));
      xhr = null;
    }; // on browser abord


    xhr.onabort = function onAbort() {
      if (!xhr) return;
      sent[address] = false;
      var response = (0, _responseFactory["default"])({
        params: params,
        xhr: xhr
      });
      reject(new _RequestAbortedError["default"]({
        response: response
      }));
      xhr = null;
    }; // on timeout


    xhr.ontimeout = function onTimeout() {
      sent[address] = false;
      var response = (0, _responseFactory["default"])({
        params: params,
        xhr: xhr
      });
      reject(new _RequestTimeoutError["default"]({
        timeout: timeout,
        response: response
      }));
      xhr = null;
    }; // on upload progress


    if (typeof onUploadProgress === 'function' && xhr.upload) {
      xhr.upload.addEventListener('progress', function (event) {
        if (!event.lengthComputable) return;
        onUploadProgress({
          event: event,
          total: event.total,
          loaded: event.loaded,
          percent: event.loaded / event.total * 100
        });
      });
    } // before send


    if (typeof beforeSend === 'function') {
      beforeSend({
        params: params,
        xhr: xhr
      });
    } // parallel request prohibited


    if (isSent(address)) {
      var _response2 = (0, _responseFactory["default"])({
        params: params,
        xhr: xhr
      });

      reject(new _ParallelRequestError["default"]({
        response: _response2
      }));
      return;
    }

    sent[address] = true; // send request

    xhr.send(data);
  });
}

},{"../../errors/NetworkError.js":68,"../../errors/ParallelRequestError.js":74,"../../errors/RequestAbortedError.js":75,"../../errors/RequestOpenError.js":77,"../../errors/RequestTimeoutError.js":78,"../../errors/ServerError.js":79,"../request/responseFactory.js":95}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = responseFactory;

function responseFactory(_ref) {
  var params = _ref.params,
      xhr = _ref.xhr;
  return {
    xhr: xhr,
    params: params,
    data: {},
    text: xhr ? xhr.responseText : ''
  };
}

},{}]},{},[1]);
