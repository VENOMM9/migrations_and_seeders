
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      names: 'John Doe',
      email : 'Johndoe@gmail.com',
      password: 'JohnDoe76234',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'Victor Nkwuo',
      email : 'VictorNkwuo@gmail.com',
      password: 'Victor00987',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'Ben Curry',
      email : 'BenCurry@gmail.com',
      password: 'BenCurry6785',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'Silva Murray',
      email : 'silvamurray@gmail.com',
      password: 'SilvaMurray5678',
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
