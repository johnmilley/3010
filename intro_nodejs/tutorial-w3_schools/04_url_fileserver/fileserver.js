const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {

  let query = url.parse(req.url, true);
  let filename = "./file_server/" + query.pathname;

  fs.readFile(filename, function(err, data) {
    
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);