'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const dateNow = new Date();
    await queryInterface.bulkInsert('Todos', [
      {
        title: "task project A",
        description: "doing task from project A",
        user_id: 2,
        status_id: 1,
        createdAt: dateNow,
        updatedAt: dateNow
      },
      {
        title: "bugfix project B",
        description: "doing bugfix an issue from project B",
        user_id: 2,
        status_id: 3,
        createdAt: dateNow,
        updatedAt: dateNow
      },
      {
        title: "memberi makan kucing",
        description: "jangan lupa memberi makan kucing jam 7 malam",
        user_id: 3,
        status_id: 3,
        createdAt: dateNow,
        updatedAt: dateNow
      },
      {
        title: "workout",
        description: "olahraga, lari sore 10km",
        user_id: 3,
        status_id: 2,
        createdAt: dateNow,
        updatedAt: dateNow
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statuses', null, {});
  }
};
