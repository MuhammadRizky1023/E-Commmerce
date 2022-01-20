const { Model, DataTypes } = require('sequelize');
const connection = require('../connection');

class OrderProduct extends Model {}

OrderProduct.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: 'order_product',
    sequelize: connection,
    paranoid: false,
    timestamps: false,
  }
);

module.exports = OrderProduct;