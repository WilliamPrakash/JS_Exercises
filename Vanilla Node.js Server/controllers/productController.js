const Product = require('../models/productModel.js')

async function getProducts(request, response) {
    try {
        const products = await Product.findAll()

        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify(products))
    } catch(e){
        console.log(e)
    }
}

module.exports = {
    getProducts
}
