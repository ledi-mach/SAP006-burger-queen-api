'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name:'Monica Alves',
        email:'monica@test.com',
        password:'123456',
        role:'cozinha',
        restaurant:'demo-restaurant',
        createdAt:new Date(),
        updatedAt: new Date(),
      },
{
        name:'Daniel Phillips',
        email:'daniel@test.com',
        password:'123456',
        role:'hall',
        restaurant:'demo-restaurant',
        createdAt:new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Julia Diniz',
        email:'julia@test.com',
        password:'123456',
        role:'hall',
        restaurant:'demo-restaurant',
        createdAt:new Date(),
        updatedAt: new Date(),
      },

      {
        name:'Guilherme Luiz',
        email:'guilherme@test.com',
        password:'123456',
        role:'cozinha',
        restaurant:'demo-restaurant',
        createdAt:new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Gabriela Silveira',
        email:'gabriela@test.com',
        password:'123456',
        role:'hall',
        restaurant:'demo-restaurant',
        createdAt:new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Vinicius Moura',
        email:'vinicius@test.com',
        password:'123456',
        role:'cozinha',
        restaurant:'demo-restaurant',
        createdAt:new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
