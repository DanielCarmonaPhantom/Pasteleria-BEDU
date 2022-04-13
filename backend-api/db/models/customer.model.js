const { Model, DataTypes, Sequelize } =  require('sequelize');

const CUSTOMER_TABLES = 'customers';

const CustomerSchema = {
    id:{
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: true,
        type: DataTypes.STRING
    },
    street: {
        allowNull: true,
        type: DataTypes.STRING
    },
    num1: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    num2: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    suburb: {
        allowNull: true,
        type: DataTypes.STRING
    },
    city: {
        allowNull: true,
        type: DataTypes.STRING
    },
    state: {
        allowNull: true,
        type: DataTypes.STRING
    },
    zipcode: {
        allowNull: true,
        type: DataTypes.STRING
    },

    
}

class Customer extends Model{
    static associate(models){
        this.hasMany(models.Order, {
            as: 'orders',
            foreignKey: 'customerId'
        });
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


