const contenedorMemoria = class {
    constructor(ruta) {
        this.ruta = ruta

        this.db = {
            carrito: [
                {
                    "id": 1,
                    "timesstamp": "fecha",
                    "productos": [
                        {
                            "id": 1,
                            "timesstamp": "fecha",
                            "nombre": "producto1",
                            "descripcion": "descripcion",
                            "codigo": 100,
                            "foto": "url",
                            "precio": 500,
                            "stock": true

                        }
                    ]
                }
            ],
            productos: [
                {
                    id: 1,
                    name: 'Jacket',
                    price: 600,
                    img: 'jacket.png'
                },
                {
                    id: 2,
                    name: 'mouse',
                    price: 200,
                    img: 'image.png'
                }
            ]
        }

        this.colection = this.db[this.ruta]
    }

    listOne(id) {
        const data = this.listAll()
        const element = data.filter(element => {
            if (element.id === parseInt(id)) {
                return element
            }
        })

        return element
    }

    listAll() {
        return this.colection
    }

    add(item) {
        const data = this.listAll()

        // AGREGAR ID
        const id = data.length + 1
        item.id = id

        // PUSH
        data.push(item)

        return id

    }

    update(id, item) {
        const data = this.colection

        const products = data.map(element => {
            if (element.id === parseInt(id)) {
                item.id = id
                return item
            } else {
                return element
            }
        })

        this.colection = products

        return this.colection
    }

    delete(id) {
        let data = this.listAll()
        let cont = 0

        data = data.filter(element => {
            if (element.id !== parseInt(id)) {
                cont++
                element.id = cont
                return element
            }
        })

        this.colection = data
        return this.colection
    }
}


module.exports = contenedorMemoria