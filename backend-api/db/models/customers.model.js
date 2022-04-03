const { Model, DataTypes, Sequelize } =  require('sequelize');

const CUSTOMER_TABLES = 'customers';

const CustomerSchema = {
    idCostumer:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    street: {
        allowNull: false,
        type: DataTypes.STRING
    },
    num1: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    num2: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    suburb: {
        allowNull: false,
        type: DataTypes.STRING
    },
    city: {
        allowNull: false,
        type: DataTypes.STRING
    },
    state: {
        allowNull: false,
        type: DataTypes.STRING
    },
    zipcode: {
        allowNull: false,
        type: DataTypes.STRING
    },

    
}

class Customer extends Model{
    static associate(){
        //models
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: CUSTOMER_TABLES,
            modelName: 'Customer',
            timestamps: false
        }
    }
}

module.exports = { CUSTOMER_TABLES, CustomerSchema, Customer }


