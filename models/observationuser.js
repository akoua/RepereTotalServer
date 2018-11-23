'use strict';
module.exports = (sequelize, DataTypes) => {
  const ObservationUser = sequelize.define('ObservationUser', {
    idUser: DataTypes.INTEGER,
    idObservation: DataTypes.INTEGER,
    idMagasin: DataTypes.INTEGER,
    isLike: DataTypes.INTEGER,
    isVue: DataTypes.BOOLEAN,
    isShare: DataTypes.INTEGER
  }, {});
  ObservationUser.associate = function(models) {
    // associations can be defined here
  };
  return ObservationUser;
};