
'use strict';

/** @type {import('sequelize-cli').Migration} */

const User = require("../models/users")
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('admins', [{
      names: 'Victor Nkwuo',
      email : 'VictorNkwuo@gmail.com',
      password: 'Victor00987',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'kelz ozir',
      email : 'kellzozirr@gmail.com',
      password: 'kelzozirs6878',
      user_id: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'Man bar',
      email : 'manBar@gmail.com',
      password: 'manbarirs6878',
      user_id: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    },]);

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


















































// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
