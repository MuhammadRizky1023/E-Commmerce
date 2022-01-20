const uuid = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_types', [
      {
        id: 1,
        type: 'The customer',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        type: 'The seller',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_types', null);
  },
};