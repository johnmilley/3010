const http = require('http')
const url = require('url');

http.createServer(function (req, res) {

    // write header
    res.writeHead(200, {'Content-Type': 'text/html'});

    // parsing the url path + queries
    let query = url.parse(req.url, true).query;
    let txt = `${query.year}, ${query.month}`
    
    res.write(`URL: ${req.url}   Query Strings: ${txt}`)
    console.log(`URL: ${req.url}   Query Strings: ${txt}`)
    console.log()


    // console.log(query)
    res.end()
}).listen(8080)

