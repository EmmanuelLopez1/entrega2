const ContenedorMemoria = require('../../contenedores/contenedorMemoria')

class ProductosDaoMemoria extends ContenedorMemoria{
    constructor(){
        super('productos')
    }
}


module.exports = ProductosDaoMemoria