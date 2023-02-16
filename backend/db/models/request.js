const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    static associate(models) {
      // define association here
    }
  }
  Request.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      phone: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      data: {
        allowNull: false,
        type:DataTypes.TEXT,
      },
      comment: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      status: {
        allowNull: false,
        type:DataTypes.TEXT,
      }
    },
    {
      sequelize,
      modelName: 'Request',
    }
  );
  return Request;
};
