'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    descricao: DataTypes.TEXT,
    categoriaId: DataTypes.INTEGER
  }, {});
  Produto.associate = function(models) {
    // associations can be defined here
    Produto.belongsTo(models.Categoria, {
      foreignKey: 'categoriaId',
      onDelete: 'CASCADE',
    })
  };
  return Produto;
};