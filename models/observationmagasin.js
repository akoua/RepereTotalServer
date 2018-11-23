'use strict';
module.exports = (sequelize, DataTypes) => {
  const ObservationMagasin = sequelize.define('ObservationMagasin', {
    idMagasin: DataTypes.INTEGER,
    idObservation: DataTypes.INTEGER
  }, {});
  ObservationMagasin.associate = function(models) {
    // associations can be defined here
  };
  return ObservationMagasin;
};