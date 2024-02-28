'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarif extends Model {

    static associate(models) {
    }
  }
  Tarif.init(
    {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Tarif',
  });
  return Tarif;
};