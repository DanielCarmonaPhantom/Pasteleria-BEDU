const boom = require('@hapi/boom');
const faker = require('faker');

// const getConnection = require('../libs/postgres')
const pool = require('../libs/postgres.pool')

class ComplementsService{
    constructor(){
        this.orders = [];
        this.generate();
        this.pool = pool;
        this.pool.on('error', (err) => console.log(err))
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.orders.push({
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
        const newOrder ={
            id: faker.datatype.uuid(),
            name,
            price,
            image
        }
        this.cakes.push(newOrder);
        return newOrder;
    }

    async find(){
        const query = 'SELECT * FROM task';
        const rta = await this.pool.query(query);
        return rta.rows;

    }

    async findOne(id){
        console.log(id)
        return this.orders.find(item => item.id === id);
    }

    async update(id, changes){
        
    }

    async delete(id){

    }


}

module.exports = ComplementsService;
