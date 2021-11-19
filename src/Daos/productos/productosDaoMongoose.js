const ContenedorMongoose = require('../../contenedores/contenedorMongoose')
const dbPath = require('../../config')
const db = dbPath.atlas.productos

class ProductosDaoMongoose extends ContenedorMongoose{
    constructor(){
        super('products', db)
    }
}


module.exports = ProductosDaoMongoose