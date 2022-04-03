const { Model, DataTypes, Sequelize } =  require('sequelize');

const PRODUCT_TABLES = 'products';

const ProductSchema = {
    idProducts:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    category: {
        allowNull: false,
        type: DataTypes.STRING
    },
    price: {
        allowNull: false,
        type: DataTypes.DECIMAL
    },
    image:{
        allowNull: false,
        type: DataTypes.STRING
    }

    
}

class Product extends Model{
    static associate(){
        //models
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: PRODUCT_TABLES,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = { PRODUCT_TABLES, ProductSchema, Product }

