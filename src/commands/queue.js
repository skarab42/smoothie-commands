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
  let globalResolve = null
  let globalReject = null
  function payload (params = {}) {
    return { ...params, resolve: globalResolve, reject: globalReject }
  }
  function processQueue () {
    if (paused || !started) return
    const command = commands.shift()
    if (!command) {
      if (typeof onDone === 'function') {
        onDone(results)
      }
      return globalResolve(results)
    }
    if (typeof onSend === 'function') {
      onSend(payload({ command }))
    }
    return callback(command)
      .then(response => {
        results.push(response)
        if (typeof onResponse === 'function') {
          onResponse(payload({ response }))
        }
      })
      .catch(error => {
        results.push(error)
        if (typeof onError === 'function') {
          onError(payload({ error }))
        }
      })
      .then(() => processQueue())
  }
  return {
    start () {
      if (started || !commands.length) return
      started = true
      return new Promise((resolve, reject) => {
        globalResolve = resolve
        globalReject = reject
        if (typeof onStart === 'function') {
          onStart(payload({ commands }))
        }
        return processQueue()
      })
    },

    pause () {
      if (!started || paused) return
      paused = true
      if (typeof onPause === 'function') {
        onPause(payload({ commands }))
      }
    },

    resume () {
      if (!paused) return
      paused = false
      if (typeof onResume === 'function') {
        onResume(payload({ commands }))
      }
      return processQueue()
    },

    stop () {
      if (!started) return
      if (typeof onStop === 'function') {
        onStop(payload({ commands }))
      }
      started = false
      paused = false
      commands = []
    }
  }
}
