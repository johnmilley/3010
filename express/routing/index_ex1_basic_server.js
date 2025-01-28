// express server with basic route
// https://www.theodinproject.com/lessons/nodejs-routes

const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello, world')
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

