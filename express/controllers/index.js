const express = require('express')
const authorRouter = require('./routes/authorRouter')

const app = express()

app.use('/authors', authorRouter)

const PORT = 3000

app.get('/', (req, res) => {
    res.send('hello, world.')
})

app.listen(PORT)