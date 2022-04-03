const boom = require('@hapi/boom');
const faker = require('faker');

const { models } = require('./../libs/sequelize')

class OrdersService{
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
                
            });
        }
    }
    

    async create(data){
        const newOrder = await models.Order.create(data);
        return newOrder
    }

    async find(){
        const rta = await models.Order.findAll();
        return rta;
    }

    async findOne(id){

        const order = await models.Order.findByPk(id)
        if (!order) {
            throw boom.notFound('product not found')
        }
        return order
    }

    async update(id, changes){
        const order = await this.findOne(id);
        const rta = await order.update(changes)
        return rta;
    }

    async delete(id){
        const order = await this.findOne(id);
        if (!order) {            
            throw boom.notFound('product not found')
        }
        await order.destroy();
        return { id };
    }


}

module.exports = OrdersService;
