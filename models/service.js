'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    idTypeService: DataTypes.INTEGER,
    heureDebut: DataTypes.STRING,
    heureFin: DataTypes.STRING,
    livraison: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING
  }, {});
  Service.associate = function(models) {
    // associations can be defined here
  };
  return Service;
};