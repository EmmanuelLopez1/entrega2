const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000


app.use(express.json())

const serverProducts = require('./routes/productos')
const serverCarrito = require('./routes/carrito')

app.use('/api/carrito', serverCarrito)
app.use('/api/productos', serverProducts)

app.listen(PORT, ()=>{
    console.log('listening')
})

