const sequelize = require('../connection');
const UserAddress = require('./UserAddress.js');
const UserType = require('./UserType');
const Category = require('./Category');
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const OrderProduct = require('./OrderProduct');
const Cart = require('./Cart');
const CartProduct = require('./CartProduct');

UserType.hasMany(User, {
    foreignKey: 'user_type_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  User.belongsTo(UserType, {
    foreignKey: 'user_type_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  Product.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  User.hasOne(Cart, {
    foreignKey: 'user_id',
  });
  
  Cart.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  Cart.hasMany(CartProduct, {
    foreignKey: 'cart_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  CartProduct.belongsTo(Cart, {
    foreignKey: 'cart_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  Product.hasMany(CartProduct, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  CartProduct.belongsTo(Product, {
    foreignKey: 'product_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  Order.hasMany(OrderProduct, {
    foreignKey: 'order_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  OrderProduct.belongsTo(Order, {
    foreignKey: 'order_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  Product.hasMany(OrderProduct, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  OrderProduct.belongsTo(Product, {
    foreignKey: 'product_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  User.hasOne(UserAddress, {
    foreignKey: 'user_id',
  });
  
  UserAddress.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  
  module.exports = {
    sequelize,
    User,
    UserType,
    Category,
    Product,
    Cart,
    CartProduct,
    Order,
    OrderProduct,
    UserAddress,

  };
  

