const { Model, DataTypes } = require('sequelize');
const connection = require('../connection');

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    modelName: 'cart',
    sequelize: connection,
    paranoid: false,
    timestamps: false,
  }
);

module.exports = Cart;
