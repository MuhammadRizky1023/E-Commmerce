require('dotenv').config();

const { User } = require('../database/models');
const jwt = require('jsonwebtoken');

const { SECRET_TOKEN } = process.env;

const bcrypt = require('bcrypt');

exports.register = async (req, res, next) => {
  try {
    const {
      email,
      password,
      first_name,
      last_name,
      phone_number,
      user_type_id,
    } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      throw new Error(
        `User with this email already exists, please use other email`
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({
      email,
      password: hashedPassword,
      first_name,
      last_name,
      phone_number,
      user_type_id,
    });

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully registered a user',
    });
  } catch (error) {
    return next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error(`User with this email was not found`);
    }

    if (user.user_type_id === 1) {
      throw new Error(`You are not authorized to access this page`);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error(`Password is not valid`);
    }

    const accessToken = jwt.sign({ userId: user.id }, SECRET_TOKEN, {
      expiresIn: '24h',
    });

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'successfully logged in',
      data: {
        access_token: accessToken,
      },
    });
  } catch (error) {
    return next(error);
  }
};