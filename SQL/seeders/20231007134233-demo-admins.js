'use strict';
const User = require("../model/users")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('admins', [{
     
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
