'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    static associate({ Lawyer }) {
      Feedback.belongsTo(Lawyer, { foreignKey: 'lawyer_id' });
    }
  }
  Feedback.init(
    {
      lawyer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Lawyers',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      accepted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      full_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      phone: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      stars: {
        type: DataTypes.FLOAT,
      },
    },
    {
      sequelize,
      modelName: 'Feedback',
    }
  );
  return Feedback;
};
