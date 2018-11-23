'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomArticle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idMagasin: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idTypeArticle: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      prix: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      photos: {
        allowNull: true,
        type: Sequelize.STRING
      },
      solde: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      commentaire: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Articles');
  }
};