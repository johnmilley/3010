// express server example with multiple Route handlers (middleware-like)

const express = require('express')
const app = express()
const PORT = 3000

const cb0 = (req, res, next) => {
    console.log('cb0')
    next()
}

const cb1 = (req, res, next) => {
    console.log('cb1')
    next()
}

const cb2 = (req, res) => {
    console.log('cb2')
    res.send('done')
}

app.get('/', [cb0, cb1, cb2])

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))