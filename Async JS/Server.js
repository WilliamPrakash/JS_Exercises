
// http://localhost:8080
// http://127.0.0.1:8080
import grab from '../Async JS/dataGrab.js'
import * as http from 'http'; //ES 6


let port = 8080

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('local server running on port: ' + port + '...');
    grab()
    res.end();
}).listen(port);


