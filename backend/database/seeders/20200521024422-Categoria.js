"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Categoria",
            [
                {
                    categoria: "Notebook",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    categoria: "PC-Desktop",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    categoria: "Tablet",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    categoria: "Smartband",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    categoria: "Kindle",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Categoria", null, {});
    },
};
