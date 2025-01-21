/* This demo shows that we can serve webpages using
    the url and filesystem modules. We'll use some more sophisticated tools for doing this in the future. */

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    let filePath = `.${req.url === '/' ? '/index.html' : req.url + '.html'}`

    console.log(filePath)

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            fs.readFile('./404.html', (err404, content404) => {
                res.end(err404 ? '404 Page Not Found' : content404)
            })
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content)
        }
    })
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))