const http = require('http')
const {getProducts} = require('./controllers/productController')

const server = http.createServer((request,response) => {
    if(request.url == '/api/products' && request.method === 'GET') {
        getProducts(request, response)
    } else {
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({message: 'Route Not Found'}))
    }
})

// In many environments you can set the environment variable PORT to tell your web server what port to listen to
// defaults to port 8080
const PORT = process.env.port || 8080
server.listen(PORT, () => console.log('Server running on port ' + PORT + '...'))

