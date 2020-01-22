//importa as handlers do product.js
const productHandler = require('./handlers/product')

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/products/{id}',
        handler: productHandler.find
        
    },
    {
        method: 'DELETE',
        path: '/api/v1/products/{id}',
        handler: productHandler.remove,
        options: {
            cors: true
        }
        
    },
    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productHandler.getAll
    },
     {
         method: 'POST',
         path: '/api/v1/products',
         handler: productHandler.save
     }
]