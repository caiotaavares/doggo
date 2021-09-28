'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pets', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        AllowNull: false,
        autoIncrement: true
      },
      id_race: {
        type: Sequelize.INTEGER,
        references: {model: 'races', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      image_uri: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      category: {
        type: Sequelize.ENUM(['dog', 'cat']),
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pets');
  }
};
