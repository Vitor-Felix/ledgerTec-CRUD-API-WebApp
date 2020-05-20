'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    categoria: DataTypes.STRING
  }, {});
  Categoria.associate = function(models) {
    // associations can be defined here
  };
  return Categoria;
};