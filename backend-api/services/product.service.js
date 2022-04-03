const boom = require('@hapi/boom');
const faker = require('faker');

const { models } = require('./../libs/sequelize')

class ProductsService{
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
        const newProduct = await models.Product.create(data);
        return newProduct
    }

    async find(){
        const rta = await models.Product.findAll();
        return rta;
    }

    async findOne(id){

        const product = await models.Product.findByPk(id)
        if (!product) {
            throw boom.notFound('product not found')
        }
        return product
    }

    async update(id, changes){
        const product = await this.findOne(id);
        const rta = await product.update(changes)
        return rta;
    }

    async delete(id){
        const product = await this.findOne(id);
        if (!product) {            
            throw boom.notFound('product not found')
        }
        await product.destroy();
        return { id };
    }


}

module.exports = ProductsService;