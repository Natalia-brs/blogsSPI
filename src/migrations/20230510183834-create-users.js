'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      display_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
     })
  },

  down: async (queryInterface, _Sequelize) => {
   return queryInterface.dropTable('users')
  } 
};
