import GrabCredentials from "./GrabLocalDatabaseCredentials.js";
import Establish_SQL_Connection from './Connect_SQL.js';

let creds = GrabCredentials();
let result = await Establish_SQL_Connection(creds.SQLServer);
console.log(result);
