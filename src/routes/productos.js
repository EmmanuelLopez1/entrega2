const express = require('express')
const app = express()
const { Router } = express
const server = new Router()

const productos = require('../Daos/index').productos

// MIDDLEWARES
const autenticacion = app.use((req, res, next) => {
    const admin = req.query.admin
    if (admin === 'true') {
        next()
    } else {
        res.send({ error: -1, description: `ruta: ${req.baseUrl} method: ${req.method} no autorizada` })
    }
})

// RUTAS GET

server.get('/', async (req, res) => {
    res.json(await productos.listAll())
})

server.get('/:id', async (req, res) => {
    const id = req.params.id
    const data = await productos.listOne(id)
    res.json(data)
})

// // RUTAS POST
server.post('/', async (req, res) => {
    const data = req.body
    res.json(await productos.add(data))
})

// RUTAS PUT
server.put('/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body
    res.json(await productos.update(id, data))
})


// RUTAS DELETE
server.delete('/:id', async (req, res) => {
    const id = req.params.id
    res.json(await productos.delete(id))
})





module.exports = server
