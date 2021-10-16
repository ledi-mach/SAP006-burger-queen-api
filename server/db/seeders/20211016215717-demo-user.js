'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Users', [
    {
      "id": 2854,
      "name": null,
      "email": "ledisalao@gmail.com",
      "role": "hall",
      "restaurant": "testeBurger",
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 2855,
      "name": null,
      "email": "ledicozinha@gmail.com",
      "role": "kitchen",
      "restaurant": "testeBurger",
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 2859,
      "name": null,
      "email": "larissaraie@gmail.com",
      "role": "hall",
      "restaurant": "testeBurger",
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 2866,
      "name": null,
      "email": "laismune@gmail.com",
      "role": "kitchen",
      "restaurant": "testeBurger",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
