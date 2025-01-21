/* A basic express web server that satisfies the project requirements */

// npm install
// node index.js

const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact-me.html'))
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
})


const PORT = 3000
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
