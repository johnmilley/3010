// dotenv - a node package that loads your environment variables from a file to the process.env object. (often meant to be secrets, like API keys, database links and credentials)
// add .env to your .gitignore files!

const http = require('http')
const dotenv = require('dotenv').config()

const hostname = '127.0.0.1';
const port = 3000;

// console.log(process)
// console.log(process.env)

console.log()
console.log("Environment variables")
console.log(`Agent: ${process.env.TOP_SECRET_AGENT}`)
console.log(`Phrase: ${process.env.TOP_SECRET_PHRASE}`)
console.log()


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});