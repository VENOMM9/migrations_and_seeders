'use strict';
const { Sequelize,DataTypes } = require('sequelize');
// /** @type {import('sequelize-cli').Migration} */
// const { v4: uuidv4 } = require("uuid")
const User = require("./users")


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Admin', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
        type: Sequelize.INTEGER,
        unique: true,
        
      },
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      
      user_id: {
        type: DataTypes.STRING,
        references: {
          model: "users",
          key:"id"
        }
        
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Admin');
  }
};