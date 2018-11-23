'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Magasins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomMagasin: {
        allowNull: false,
        type: Sequelize.STRING
      },
      domaine: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contacts: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING
      },
      latitude: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      longitude: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jourOuverture: {
        allowNull: false,
        type: Sequelize.STRING
      },
      heureOuverture: {
        allowNull: false,
        type: Sequelize.STRING
      },
      heureFermeture: {
        allowNull: false,
        type: Sequelize.STRING
      },
      livraison: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Magasins');
  }
};