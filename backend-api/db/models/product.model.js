const { Model, DataTypes, Sequelize } =  require('sequelize');

const PRODUCT_TABLES = 'products';

const ProductSchema = {
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
    category: {
        allowNull: true,
        type: DataTypes.STRING
    },
    price: {
        allowNull: true,
        type: DataTypes.DECIMAL
    },
    image:{
        allowNull: true,
        type: DataTypes.STRING
    }

    
}

class Product extends Model{
    static associate(models){
        // this.hasMany(models.Order, {
        //     as: 'orders',
        //     foreignKey: 'productId'
        // });
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

