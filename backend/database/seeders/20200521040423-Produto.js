'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Produtos', [{
      categoriaId: 1,
      descricao: 
        "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      categoriaId: 2,
      descricao: 
        "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      categoriaId: 4,
      descricao: 
        "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Produtos', null, {});
  }
};
