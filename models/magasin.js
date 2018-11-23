'use strict';
module.exports = (sequelize, DataTypes) => {
  const Magasin = sequelize.define('Magasin', {
    nomMagasin: DataTypes.STRING,
    domaine: DataTypes.STRING,
    contacts: DataTypes.STRING,
    email: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    jourOuverture: DataTypes.STRING,
    heureOuverture: DataTypes.STRING,
    heureFermeture: DataTypes.STRING,
    livraison: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING
  }, {});
  Magasin.associate = function(models) {
    // associations can be defined here
  };
  return Magasin;
};