const boom = require('@hapi/boom');
const faker = require('faker');

const { models } = require('./../libs/sequelize')

class PaymentService{
    constructor(){
    }    

    async create(data){
        const newPayment = await models.Payment.create(data);
        return newPayment
    }

    async find(){
        const rta = await models.Payment.findAll();
        return rta;
    }

    async findOne(id){

        const payment = await models.Payment.findByPk(id)
        if (!payment) {
            throw boom.notFound('payment not found')
        }
        return payment
    }

    async update(id, changes){
        const payment = await this.findOne(id);
        const rta = await payment.update(changes)
        return rta;
    }

    async delete(id){
        const payment = await this.findOne(id);
        if (!payment) {            
            throw boom.notFound('payment not found')
        }
        await payment.destroy();
        return { id };
    }


}

module.exports = PaymentService;
