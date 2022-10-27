
// http://localhost:8080
// http://127.0.0.1:8080
import grab from '../dataGrab.js'

var http = require('http');
let port = 8080

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('local server running on port: ' + port + '...');
    grab()
    res.end();
}).listen(port);


