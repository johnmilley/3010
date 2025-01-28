// express server with Router instance (birds.js)

const express = require('express')
const birds = require('./birds')

const app = express()
const PORT = 3000

app.use('/birds', birds)

app.get('/', (req, res) => {
    res.send('Hello, world')
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))