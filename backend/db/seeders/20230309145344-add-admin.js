const bcrypt = require('bcrypt');
const { Admin } = require('../models');

('use strict');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Admin.bulkCreate([
      {
        email: 'admin@mail.ru',
        password: await bcrypt.hash('123', 10),
        superadmin: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Admin.destroy({ truncate: { cascade: true } });
  },
};
