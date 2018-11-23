'use strict';
module.exports = (sequelize, DataTypes) => {
  const ServiceMagasin = sequelize.define('ServiceMagasin', {
    idMagasin: DataTypes.INTEGER,
    idService: DataTypes.INTEGER
  }, {});
  ServiceMagasin.associate = function(models) {
    // associations can be defined here
  };
  return ServiceMagasin;
};