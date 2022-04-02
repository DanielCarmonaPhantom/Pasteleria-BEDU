 const boom = require('@hapi/boom');
const faker = require('faker');

class ComplementsService{
    constructor(){
        this.complements = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.complements.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
                isBlock: faker.datatype.boolean(),
            });
        }
    }
    

    async create(data){
        const { name, price, image } = data;
        const newCake ={
            id: faker.datatype.uuid(),
            name,
            price,
            image
        }
        this.cakes.push(newCake);
        return newCake;
    }

    async find(){
        return this.complements;
    }

    async findOne(id){
        console.log(id)
        return this.complements.find(item => item.id === id);
    }

    async update(id, changes){
        
    }

    async delete(id){

    }


}

module.exports = ComplementsService;
