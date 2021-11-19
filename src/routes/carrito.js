const express = require('express')
const { Router } = express
const server = new Router()
const date = new Date()


const carrito = require('../Daos/index').carrito


// RUTAS GET

server.get('/', async (req, res) => {
    res.json(await carrito.listAll())
})

server.get('/:id', async (req, res) => {
    res.json(await carrito.listOne(req.params.id))
})


// // RUTAS POST
server.post('/', async (req, res) => {
    const newCar = req.body
    res.json(await carrito.add(newCar))
})

server.put('/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body
    res.json(await carrito.update(id, data))
})



// // RUTAS DELETE
server.delete('/:id', async (req, res) => {
    const id = req.params.id
    res.json(await carrito.delete(id))
})



module.exports = server