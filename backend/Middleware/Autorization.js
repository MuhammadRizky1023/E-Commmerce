require('dotenv').config();

const { User } = require('../database/models');
const jwt = require('jsonwebtoken');

const { SECRET_TOKEN } = process.env;

exports.Authorization = async (req, res, next) => {
  try {
    const authorization = req.header('Authorization');

    if (!authorization) {
      throw new Error('Invalid token.');
    }

    const token = authorization.split('Bearer ')[1];

    if (!token) {
      throw new Error('Invalid token.');
    }

    const decodedToken = jwt.verify(token, SECRET_TOKEN);

    if (!decodedToken.userId) {
      throw new Error('Invalid token');
    }

    const user = await User.findByPk(decodedToken.userId);

    if (!user) {
      throw new Error('Invalid token');
    }

    req.user = user;

    return next();
  } catch (err) {
    return res.status(401).json({
      status: 'error',
      code: 401,
      message: err.message,
    });
  }
};