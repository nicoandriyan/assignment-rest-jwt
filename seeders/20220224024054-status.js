'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const dateNow = new Date();
    await queryInterface.bulkInsert('Statuses', [
      {
        name: 'Completed',
        createdAt: dateNow,
        updatedAt: dateNow
      },
      {
        name: 'On Progress',
        createdAt: dateNow,
        updatedAt: dateNow
      },
      {
        name: 'Pending',
        createdAt: dateNow,
        updatedAt: dateNow
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statuses', null, {});
  }
};
