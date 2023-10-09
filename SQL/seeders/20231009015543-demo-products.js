

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [{
      names: 'Patriot missile',
      size: '456',
      price: '49000',
      category: "defensive",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'howitzer',
      size: '098',
      price: '67800',
      category: "defensive",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'sarmat',
      size: '888',
      price: '120000',
      category: "catastrophic",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'satan two',
      size: '678',
      price: '65000',
      category: "offensive",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'taurus',
      size: '889',
      price: '99860',
      category: "defensive",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'stingers',
      size: '118',
      price: '88700',
      category: "offensive",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'challenger',
      size: '675',
      price: '6110',
      category: "defensive",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'Iglo Ma',
      size: '998',
      price: '75500',
      category: "defensive",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'abram',
      size: '898',
      price: '66700',
      category: "offensive",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      names: 'kojo two',
      size: '178',
      price: '97000',
      category: "catastrophic",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

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
