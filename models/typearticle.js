'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypeArticle = sequelize.define('TypeArticle', {
    libelle: DataTypes.STRING
  }, {});
  TypeArticle.associate = function(models) {
    // associations can be defined here
  };
  return TypeArticle;
};