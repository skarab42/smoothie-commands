export default function queue ({
  callback,
  commands,
  onStart = null,
  onPause = null,
  onResume = null,
  onStop = null,
  onSend = null,
  onResponse = null,
  onError = null,
  onDone = null
}) {
  let started = false
  let paused = false
  let results = []
  let promise = { resolve: null, reject: null }
  function payload (params = {}) {
    return { ...params, commands, promise }
  }
  function processQueue () {
    if (paused || !started) return
    const command = commands.shift()
    if (!command) {
      if (typeof onDone === 'function') {
        onDone(results)
      }
      return promise.resolve(results)
    }
    if (typeof onSend === 'function') {
      onSend(payload({ command }))
    }
    return callback(command)
      .then(response => {
        results.push(response)
        if (typeof onResponse === 'function') {
          onResponse(payload({ command, response }))
        }
      })
      .catch(error => {
        results.push(error)
        if (typeof onError === 'function') {
          onError(payload({ command, error }))
        }
      })
      .then(() => processQueue())
  }
  function appendPrepend (func, what, where) {
    if (!Array.isArray(what)) {
      what = [what]
    }
    if (func === 'unshift') {
      what = what.reverse()
    }
    what.forEach(item => where[func](item))
  }
  return {
    append (...command) {
      command.forEach(c => appendPrepend('push', c, commands))
    },
    prepend (...command) {
      command.forEach(c => appendPrepend('unshift', c, commands))
    },
    start () {
      if (started || !commands.length) return
      started = true
      return new Promise((resolve, reject) => {
        promise.resolve = resolve
        promise.reject = reject
        if (typeof onStart === 'function') {
          onStart(payload())
        }
        return processQueue()
      })
    },
    pause () {
      if (!started || paused) return
      paused = true
      if (typeof onPause === 'function') {
        onPause(payload())
      }
    },
    resume () {
      if (!paused) return
      paused = false
      if (typeof onResume === 'function') {
        onResume(payload())
      }
      return processQueue()
    },
    stop () {
      if (!started) return
      if (typeof onStop === 'function') {
        onStop(payload())
      }
      started = false
      paused = false
      commands = []
    }
  }
}
