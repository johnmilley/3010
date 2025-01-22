// Middleware demo

const express = require('express')
const path = require('path')
const app = express()

// think of middleware as everything that happens in between the request coming in and the response going out.

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`)
    console.log(`protocol: ${req.protocol}`)
    console.log(`hostname: ${req.hostname}`)
    next()
})

// app.use((req, res, next) => {
//     console.log('Hello, i am middleware function. I am getting things ready for the response.')
//     next() // pass on to the next routing function that matches
// })

// order of middleware matters! Try moving these around.
// app.use((req, res, next) => {
//     console.log('Another middleware function. I am doing database stuff. beep boop beep boop.')
//     next()
// })

app.get('/', (req, res) => {
    // res.status(200)
    res.sendFile(path.join(__dirname, 'index.html')) // the end of the request / response cycle
})

app.get('/middleware', (req, res) => {
    res.sendFile(path.join(__dirname, 'middleware.html'))
})

// 404 error page middleware
app.use((req, res) => {
    res.status(404)
    res.send('Page not found.')
})

app.listen(3000)