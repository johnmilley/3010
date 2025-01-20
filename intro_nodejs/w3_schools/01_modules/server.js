const http = require('http')
const date = require('./module')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(date.customDateFormat());
  }).listen(8080);