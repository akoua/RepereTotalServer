'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ObservationUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idObservation: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idMagasin: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      isLike: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      isVue: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      isShare: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('ObservationUsers');
  }
};