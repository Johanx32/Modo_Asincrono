'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
       username: 'John Doe',
       email: 'jefonseca33@misena.edu.co',
       password: '12345678'
    },
    {
      username: 'Johan',
      email: 'johan@misena.edu.co',
      password: '1234234'
    },
    {
      username: 'Jeisson',
      email: 'jeisson3@misena.edu.co',
      password: '534532423'
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
