const CrudMethods = class{
    constructor(data){

    }

    listOne(data, property, id){
        const element = data.filter(element => {
            if (element[`${property}`] == id) {
                return element
            }
        })

        return element
    }
}

module.exports = CrudMethods