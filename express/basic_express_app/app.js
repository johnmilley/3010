const express = require('express')
const path = require('path')

const app = express() // creates the web server 'app'

// app.use(express.static('public'))  // points express where to look for static web files

// this is a Route! When we get a request from localhost:3000/ (note the trailing '/' -- that's our path)
app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))

app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'public/about.html')))

// get the port from .env OR use 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`$Listening on port ${PORT}...`))



// console.log(__filename)
// console.log(__dirname)

