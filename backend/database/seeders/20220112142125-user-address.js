'use strict';
const uuid = require('uuid');
module.exports = {
  up: async (queryInterface, Sequelize) => {


    const users = await queryInterface.sequelize.query(
      `SELECT u.id from users u`
    );

    if (users && users.length > 0) {
      return Promise.all(
        users.map((user, index) =>
          queryInterface.bulkInsert('user_address', [
            {
              id: uuid.v4(),
              first_name: 'Muhammad',
              last_name: 'Rizky',
              address: 'Jln setidiabudi jakarta selatan',
              province: 'Jakarta',
              city: 'Jakarta selatan',
              postal_code: '10023',
              phone_number: '083345650156',
              user_id: user[index].id,
            },
            {
              id: uuid.v4(),
              first_name: 'Muhammad',
              last_name: 'Fahmi',
              address: 'Jln setidiabudi jakarta selatan',
              province: 'Jakarta',
              city: 'Jakarta selatan',
              postal_code: '10023',
              phone_number: '088472569821',
              user_id: user[index].id,
            }
          ])
          )
        );
      }
    },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_address', null);
  }
  
};