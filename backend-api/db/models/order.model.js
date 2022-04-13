const { Model, DataTypes, Sequelize } =  require('sequelize');
const { CUSTOMER_TABLES } = require('./customer.model')
const { PRODUCT_TABLES } = require('./product.model')


const ORDER_TABLES = 'orders';

const OrderSchema = {
    id:{
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    customerId:{
        field: 'customer_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        reference: {
            model: CUSTOMER_TABLES,
            key: 'id' 
        }
    },
    productId:{
        allowNull: true,
        type: DataTypes.INTEGER,
        reference: {
            model: PRODUCT_TABLES,
            key: 'id'
        }
    },
    amount:{
        allow_Null: true,
        type: DataTypes.INTEGER
    },
    size:{
        allowNull: true,
        type: DataTypes.INTEGER
    },
    price:{
        allowNull: true,
        type: DataTypes.DECIMAL
    }, 

}

class Order extends Model{
    static associate(models){
        this.belongsTo(models.Customer, {
            as: 'customer'
        });
        // this.belongsTo(models.Product, {
        //     as: 'product'
        // })
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: ORDER_TABLES,
            modelName: 'Order',
            timestamps: false
        }
    }
}

module.exports = { ORDER_TABLES, OrderSchema, Order }

