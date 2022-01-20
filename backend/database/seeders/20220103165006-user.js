const uuid = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = 'pass12345';

    const user_types = await queryInterface.sequelize.query(
      `SELECT u.id from user_types u`
    );

    if (user_types && user_types.length > 0) {
      return Promise.all(
        user_types.map((type, index) =>
          queryInterface.bulkInsert('users', [
            {
              id: uuid.v4(),
              email: 'muhammadrizky102356gmail.com',
              password: bcrypt.hashSync(password, 12),
              first_name: 'Muhammad',
              last_name: 'Rizky',
              phone_number: '083345650156',
              created_at: new Date(),
              updated_at: new Date(),
              user_type_id: type[index].id,
            },
            {
              id: uuid.v4(),
              email: 'fami455@gmail.com',
              password: bcrypt.hashSync(password, 12),
              first_name: 'Muhammad',
              last_name: 'Fahmi',
              phone_number: '088472569821',
              created_at: new Date(),
              updated_at: new Date(),
              user_type_id: type[index].id,
            },
          ])
        )
      );
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null);
  },
};