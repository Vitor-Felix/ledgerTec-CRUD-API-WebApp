'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Categoria', [{
        categoria: 'Notebook',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        categoria: 'PC-Desktop',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        categoria: 'Tablet',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        categoria: 'Smartband',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        categoria: 'Kindle',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Categoria', null, {});
  }
};