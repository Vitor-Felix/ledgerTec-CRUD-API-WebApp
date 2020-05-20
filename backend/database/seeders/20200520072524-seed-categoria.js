'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Categoria', [{
        categoria: 'notebook',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        categoria: 'PC-Desktop',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        categoria: 'smartphone',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        categoria: 'tablet',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        categoria: 'smartband',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
