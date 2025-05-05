import GrabCredentials from "./GrabLocalDatabaseCredentials.js";
import Establish_SQL_Connection from './Connect_SQL.js'

let creds = GrabCredentials();
console.log(creds);
let result = await Establish_SQL_Connection(creds.SQLServer_Mac);
console.log(result);
