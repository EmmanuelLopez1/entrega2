let daoCarrito
let daoProducto

let option = 'atlas'

const setContenedores = (carrito, producto) => {
    daoCarrito = new carrito()
    daoProducto = new producto()
}

let carrito = ''
let productos = ''

switch (option) {
    case 'json':
        carrito = require('./carrito/carritoDaoArchivo')
        productos = require('./productos/productosDaoArchivo')

        setContenedores(carrito, productos)
        break;

    case 'memoria':
        carrito = require('./carrito/carritoDaoMemoria')
        productos = require('./productos/productosDaoMemoria')

        setContenedores(carrito, productos)

        break;

    case 'atlas':
        carrito = require('./carrito/carritoDaoMongoose')
        productos = require('./productos/productosDaoMongoose')
        setContenedores(carrito, productos)
        break;
    case 'firebase':
        carrito = require('./carrito/carritoDaoFirebase')
        productos = require('./productos/productosDaoFirebase')

        setContenedores(carrito, productos)

        break;
    default:
        break;
}

module.exports = {
    carrito: daoCarrito,
    productos: daoProducto
}
