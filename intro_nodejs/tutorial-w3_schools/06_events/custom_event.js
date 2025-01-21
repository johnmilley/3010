const events = require('events')

const emitter = new events.EventEmitter()

emitter.on('scream', name => {
    console.log(`HELLO, ${name.toUpperCase()}!`)
})

emitter.emit('scream', 'Wally')