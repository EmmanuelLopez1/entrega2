const fs = require('fs')
const DbPath = require('../config')

const ContenedorArchivo = class {
    constructor(ruta) {
        this.ruta = `${DbPath.fileSystem.path}/${ruta}`
        this.db = ruta
    }

    async listOne(id) {
        const data = await this.listAll()

        const element = data.filter(element => {
            if (element.id === parseInt(id)) {
                return element
            }
        })


        return element

    }

    async listAll() {
        const data = await fs.promises.readFile(this.ruta, 'utf-8')
        const json = JSON.parse(data)
        return json
    }

    async add(element) {
        const data = await this.listAll()

        // AGREGAR ID AL PRODUCTO
        const id = data.length + 1
        element.id = id
        data.push(element)

        try {
            const str = JSON.stringify(data)
            fs.promises.writeFile(this.ruta, str)
            return element
        } catch (error) {
            throw new Error(`Error al guardar ${error}`)
        }
    }

    async update(id, newItem) {
        const arr = await this.listAll()
        arr[id - 1] = newItem
        arr[id - 1].id = parseInt(id)

        try {
            const str = JSON.stringify(arr)
            fs.promises.writeFile(this.ruta, str)
            return arr
        } catch (error) {
            throw new Error(`Error al actualizar ${error}`)
        }
    }

    async delete(id) {
        const data = await this.listAll()
        let cont = 1
        let eliminado = false

        const arr = data.filter(element => {
            if (element.id !== parseInt(id)) {
                element.id = cont
                cont++
                return element
            } else {
                eliminado = true
            }
        })

        try {
            const str = JSON.stringify(arr)
            fs.promises.writeFile(this.ruta, str)
            
            if(eliminado) {
                return {message: 'Producto eliminado con exito', productos: arr}
            }
        } catch (error) {
            return new Error(`Error al eliminar ${error}`)
        }
    }

    async deleteAll() {
        try {
            fs.promises.writeFile(this.ruta, JSON.stringify([]))
            return {message: 'Elementos eliminados con exito'}
        } catch (error) {
            throw new Error(`Error al borrar ${error}`)
        }
    }
}

module.exports = ContenedorArchivo