const ContenedorFirebase = require('../../contenedores/contenedorFirebase')
const config = require('../../config')
const fb = config.firebase

class ProductosDaoFirebase extends ContenedorFirebase{
    constructor(){
        super('carrito', fb)
    }
}


module.exports = ProductosDaoFirebase