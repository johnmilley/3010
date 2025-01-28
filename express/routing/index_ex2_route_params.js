// express server with route parameters
// https://www.theodinproject.com/lessons/nodejs-routes

const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('/.*fly$/')
})

// Route parameters - used to capture values at specified position in url.
// values stored in req.params
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})

// valid characters for route params: [A-Za-z0-9_], - (hypen), and . (period)
// go-to: http://localhost:3000/flights/YDF-YYZ
app.get('/flights/:from-:to', (req, res) => {
    res.send(req.params)
})


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))