'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('races', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        AllowNull: false,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        AllowNull:false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('races');
  }
};
