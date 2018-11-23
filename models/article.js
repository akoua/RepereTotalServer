'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    nomArticle: DataTypes.STRING,
    idMagasin: DataTypes.INTEGER,
    idTypeArticle: DataTypes.INTEGER,
    prix: DataTypes.FLOAT,
    photos: DataTypes.STRING,
    solde: DataTypes.FLOAT,
    commentaire: DataTypes.STRING
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};