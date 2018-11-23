'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idTypeService: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      heureDebut: {
        allowNull: true,
        type: Sequelize.STRING
      },
      heureFin: {
        allowNull: true,
        type: Sequelize.STRING
      },
      livraison: {
        allowNull: true,
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
    return queryInterface.dropTable('Services');
  }
};