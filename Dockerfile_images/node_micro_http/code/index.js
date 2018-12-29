var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('node micro http server\n');
}).listen(8080);

console.log('HTTP:Server started');