'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bootcamp.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    website: DataTypes.STRING,
    phone: DataTypes.STRING,
    average_rating: DataTypes.DOUBLE,
    average_cost: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'bootcamp',
  });
  return bootcamp;
};