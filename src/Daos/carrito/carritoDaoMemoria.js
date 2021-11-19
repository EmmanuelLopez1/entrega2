const ContenedorMemoria = require('../../contenedores/contenedorMemoria')

class CarritoDaoMemoria extends ContenedorMemoria{
    constructor(){
        super('carrito')
    }
}


module.exports = CarritoDaoMemoria