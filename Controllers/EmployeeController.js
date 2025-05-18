import * as http from 'http'


export default function EmployeeController() {
    console.log('Inside Employee_Controller.js')
    getEmployees()
}

async function getEmployees(req, res) {
    try {
        // SQL QUERY
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(record))
    } catch(error) {
        console.log(error)
    }
}

