const { Model, DataTypes, Sequelize } =  require('sequelize');

const ORDER_TABLES = 'orders';

const OrderSchema = {
    idOrders:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    Date:{
        allowNull: false,
        type: DataTypes.DATE
    },
    idStore:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    idClients:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    idEmployee:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    Order_Cakes:{
        allow_Null: false,
        type: DataTypes.JSON
    },
    Order_Complements:{
        allowNull: false,
        type: DataTypes.JSON,
        field: 'Date',
        defaultValue: Sequelize.NOW
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

