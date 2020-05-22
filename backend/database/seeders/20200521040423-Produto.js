'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Produtos', [{
      categoriaId: 36,
      descricao: 
        "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      categoriaId: 37,
      descricao: 
        "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      categoriaId: 38,
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
