const { Model, DataTypes } = require('sequelize');
const connection = require('../connection');

class UserType extends Model {}

UserType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    modelName: 'user_types',
    sequelize: connection,
    paranoid: false,
    timestamps: false,
  }
);

module.exports = UserType