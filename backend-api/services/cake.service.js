const boom = require('@hapi/boom');
const faker = require('faker');

class CakesService{
    constructor(){
        this.cakes = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.cakes.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
                
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
        return this.cakes;
    }

    async findOne(id){
        console.log(id)
        const cake = this.cakes.find(item => item.id === id);
        if (!cake) {
            throw boom.notFound('product not found')
        }
        return cake
    }

    async update(id, changes){
        const index = this.cakes.findIndex(item => item.id ===id);
        if (index ===-1){
            throw boom.notFound('product not found')
        }
        const cake = this.cake[index];
        this.cakes[index] = {
            ...cake,
            ...changes
        }
    }

    async delete(id){
        const index = this.cakes.findIndex(item => item.id ===id);
        if (index ===-1){
            throw boom.notFound('product not found')
        }
        this.cakes.splice(index,1);
        return { id };
    }


}

module.exports = CakesService;
