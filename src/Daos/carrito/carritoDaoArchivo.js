const ContenedorArchivo = require('../../contenedores/contenedorArchivo')

class ProductosDaoArchivo extends ContenedorArchivo{
    constructor(){
        super('carrito.json')
    }
}


module.exports = ProductosDaoArchivo