const http = require('http')

const server = http.createServer((request,response) => {
    if(request.url)
    response.writeHead()
    response.end(JSON.stringify(products))
})

// In many environments you can set the environment variable PORT to tell your web server what port to listen to
// defaults to port 8080
const PORT = process.env.port || 8080
server.listen(PORT, () => console.log('Server running on port ' + PORT + '...'))

