const admin = require('firebase-admin')
const config = require('../config')
const serviceAccount = config.firebase

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

const ContenedorFirebase = class {
    constructor(coleccion){
        this.query = db.collection(coleccion)
    }

    async listOne(id){
        const doc = await this.query.doc(id)
        const item = (await doc.get()).data()
        return item
    }

    async listAll(){
        const doc = await this.query.get()
        const docs = []

        doc.forEach(document =>{
            const documento = document.data()
            docs.push(documento)
        })

        return docs
    }

    async add(item){
        const products = await this.listAll()
        const id = products.length + 1
        
        await this.query.doc(`${id}`).set(item)

        return await this.listAll()
    }

    async update(document, item){
        await this.query.doc(`${document}`).set(item)
        return this.listAll()
    }

    async delete(doc){
        await this.query.doc(doc).delete()
        return this.listAll()
    }

}

module.exports = ContenedorFirebase