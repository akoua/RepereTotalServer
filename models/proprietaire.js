'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proprietaire = sequelize.define('Proprietaire', {
    tokenAuth: DataTypes.STRING,
    network: DataTypes.STRING,
    photo: DataTypes.STRING,
    lastConno: DataTypes.DATE
  }, {});
  Proprietaire.associate = function(models) {
    // associations can be defined here
  };
  return Proprietaire;
};