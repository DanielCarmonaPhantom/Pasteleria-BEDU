const boom = require('@hapi/boom');
const faker = require('faker');

const { models } = require('./../libs/sequelize')

class CustomerService{
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
        const newCustomer = await models.Customer.create(data);
        return newCustomer
    }

    async find(){
        const rta = await models.Customer.findAll();
        return rta;
    }

    async findOne(id){

        const customer = await models.Customer.findByPk(id)
        if (!customer) {
            throw boom.notFound('product not found')
        }
        return customer
    }

    async update(id, changes){
        const customer = await this.findOne(id);
        const rta = await product.update(changes)
        return rta;
    }

    async delete(id){
        const customer = await this.findOne(id);
        if (!customer) {            
            throw boom.notFound('customer not found')
        }
        await customer.destroy();
        return { id };
    }


}

module.exports = CustomerService;
