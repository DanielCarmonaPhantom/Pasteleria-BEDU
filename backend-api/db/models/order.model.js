const { Model, DataTypes, Sequelize } =  require('sequelize');

const ORDER_TABLES = 'orders';

const OrderSchema = {
    idOrders:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    idPayment:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    idProduct:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    amount:{
        allow_Null: false,
        type: DataTypes.INTEGER
    },
    size:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    price:{
        allowNull: false,
        type: DataTypes.DECIMAL
    },
    

    
}

class Order extends Model{
    static associate(){
        //models
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

