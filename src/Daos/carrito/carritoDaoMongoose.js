const ContenedorMongoose = require('../../contenedores/contenedorMongoose')
const dbPath = require('../../config')
const db = dbPath.atlas.productos

class CarritoDaoMongoose extends ContenedorMongoose{
    constructor(){
        super('carrito', db)
    }
}


module.exports = CarritoDaoMongoose