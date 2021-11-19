const ContenedorArchivo = require('../../contenedores/contenedorArchivo')

class ProductosDaoArchivo extends ContenedorArchivo{
    constructor(){
        super('productos.json')
    }
}


module.exports = ProductosDaoArchivo