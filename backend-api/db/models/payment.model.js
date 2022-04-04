const { Model, DataTypes, Sequelize } =  require('sequelize');

const PAYMENT_TABLES = 'payment';

const PaymentSchema = {
    idCustomer:{
        allowNull:true,
        type: DataTypes.INTEGER,
    },
    total:{
        allow_Null:true,
        type: DataTypes.DECIMAL
    },    
}

class Payment extends Model{
    static associate(){
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: PAYMENT_TABLES,
            modelName: 'Payment',
            timestamps: false
        }
    }
}

module.exports = { PAYMENT_TABLES, PaymentSchema, Payment }

