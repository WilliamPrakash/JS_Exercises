const fetch = require('node-fetch')
const https = require('https')

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
})

fetch('https://localhost:44310/weatherforecast', {
    method: 'GET',
    agent: httpsAgent
})
.then(console.log(response))

