'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [
      {
        id: 1,
        name: 'Pakaian',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'Jam Tangan',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: 'Kacamata',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: 'Sepatu',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        name: 'Topi',
        created_at: new Date(),
        updated_at: new Date(),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('category', null);
  },
};