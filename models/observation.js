'use strict';
module.exports = (sequelize, DataTypes) => {
  const Observation = sequelize.define('Observation', {
    vue: DataTypes.INTEGER,
    like: DataTypes.INTEGER,
    share: DataTypes.INTEGER
  }, {});
  Observation.associate = function(models) {
    // associations can be defined here
  };
  return Observation;
};