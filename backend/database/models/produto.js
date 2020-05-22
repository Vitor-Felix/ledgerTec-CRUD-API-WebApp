'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    descricao: DataTypes.TEXT,
    categoriaId: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  Produto.associate = function(models) {
    // associations can be defined here
    Produto.belongsTo(models.Categoria, {
      foreignKey: 'categoriaId',
      as: 'categoria',
      onDelete: 'CASCADE',
    })
  };
  return Produto;
};