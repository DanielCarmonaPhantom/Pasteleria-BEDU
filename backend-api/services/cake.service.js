// const boom = require('@hapi/boom');
const faker = require('faker');

class CakesService{
    constructor(){
        this.products = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
                isBlock: faker.datatype.boolean(),
            });
        }
    }
    

    async create(){

    }

    async find(){
        return this.products;
    }

    async findFlavors(){

    }

    async update(id, changes){

    }

    async delete(id){

    }


}

module.exports = CakesService;
