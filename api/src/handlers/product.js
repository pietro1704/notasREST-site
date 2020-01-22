//aqui sao só as funcoes a serem executadas por routes.js
const ProductModel = require('../models/product')

const transformer = product => ({
    type: 'products',
    id: product.id,
    attributes: {
        name: product.name,
        price: product.price,
    },
    links: {
        self: `/api/v1/products/${product.id}`
    }
});


const find = async(req, res) =>{
   const product = await ProductModel.findByIdAndUpdate(req.params.id)
   return {data: transformer(product)}
}

const remove = async (req, res) => {
    await ProductModel.findOneAndDelete({
        _id: req.params.id
    })
    return res.response().code(204)
}

const getAll = async (request, h) => {
    const products = await ProductModel.find({})
    return products.map(transformer)
}

const save = async (req, res) => {
    const {
        name,
        price
    } = req.payload

    const product = new ProductModel
    product.name = name
    product.price = price

    await product.save()

    return res.response(transformer(product)).code(201)
}

module.exports = {
    remove,
    getAll,
    save,
    find
}