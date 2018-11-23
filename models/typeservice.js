'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypeService = sequelize.define('TypeService', {
    libelle: DataTypes.STRING
  }, {});
  TypeService.associate = function(models) {
    // associations can be defined here
  };
  return TypeService;
};