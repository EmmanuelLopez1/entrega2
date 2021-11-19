const mongoose = require('mongoose')
const { Schema, model } = mongoose
const dbPath = require('../config')
const db = dbPath.atlas.url


mongoose.connect(db)

const ContenedorMongo = class {
    constructor(coleccion, schema) {
        this.colecction = model(coleccion, schema)
    }

    // DEBE RECIBIR UN UN OBJETO DE TIPO JSON ( example: {"name": "Jesus"} )
    async listOne(condition) {
        let json = JSON.parse(condition)
        const element = await this.colecction.find(json)
        return element
    }

    async listAll() {
        const data = await this.colecction.find()
        console.log('aqui');
        return data
    }

    async add(item) {
        const element = await new this.colecction(item)

        const result = element.save((err, document) => {
            if (err) {
                console.log(err);
                return err
            } else {
                return document
            }
        })

        return result
    }

    async update(condition, newItem) {
        let json = JSON.parse(condition)

        try{
            console.log(this.colecction)
            return await this.colecction.updateOne(json, newItem)
        }catch(err){
            console.log(err)
        }
    }

    async delete(condition) {
        let json = JSON.parse(condition)
        await this.colecction.deleteOne(json)
        return this.listAll()
    }
}

module.exports = ContenedorMongo

