import * as http from 'http'; // what about https?
import EmployeeController from './DAL/EmployeeController.js';
import GrabCredentials from './DAL/GrabLocalDatabaseCredentials.js' // if I don't use the {}, I get the error: the requested module does not provide an export named default
import Establish_SQL_Connection from './DAL/Connect_SQL.js';

const credentials = GrabCredentials();
console.log(credentials);
let result = await Establish_SQL_Connection(credentials["SQLServer"]);
console.log(result);

http.createServer((req, res) => {
    // Trim req url
    let controller = req.url.split('/').filter(el => el)

    // Route request to various controllers
    if (controller[0].toLowerCase() === 'api' && controller[1].toLowerCase() === 'employee') {
        EmployeeController() // Pass sql connection into controller?
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({message: 'Route not found...'}))
    }
    
}).listen(5001)

