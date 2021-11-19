const ContenedorFirebase = require('../../contenedores/contenedorFirebase')
const config = require('../../config')
const fb = config.firebase

class ProductosDaoFirebase extends ContenedorFirebase{
    constructor(){
        super('productos', fb)
    }
}


module.exports = ProductosDaoFirebase