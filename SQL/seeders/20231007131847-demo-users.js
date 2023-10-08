'use strict';

/** @type {import('sequelize-cli').Migration} */
const User = require("../model/users")
module.exports = {
  async up (queryInterface, Sequelize) {
    
     
      await queryInterface.bulkInsert('users', [{
        name: 'Dan  Cole',
        email: 'Dancoleon@gmail.com',
        password: 'Dan989039',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
    
      
      
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
