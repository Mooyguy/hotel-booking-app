const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const BookingModel = require('./booking')(sequelize, Sequelize.DataTypes);

const db = {
  sequelize,
  Sequelize,
  Booking: BookingModel
};

module.exports = db;