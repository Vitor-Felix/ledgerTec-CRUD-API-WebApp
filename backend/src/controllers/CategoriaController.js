const models = require("../../database/models");

const getAllCategorias = async (req, res) => {
    try {
        const categorias = await models.Categoria.findAll({
          attributes: ['id', 'categoria']
        });
      return res.status(200).json({ categorias });
    } catch (error) {
      return res.status(500).send(error.message);
    }
};


const getCategoriaById = async (req, res) => {
  try {
    const { categoriaId } = req.params;
    const categoria = await models.Categoria.findOne({
      where: { id: categoriaId },
      attributes: ['id', 'categoria'],
    });

    if (categoria) {
      return res.status(200).json({ categoria });
    }
    return res.status(404).send("Não existe categoria com ID = " + categoriaId);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const createCategoria = async (req, res) => {
  try {
    const categoria = await models.Categoria.create(req.body);

    return res.status(201).json({ 'categoriaId': categoria.id });
  } catch (error) {
    
    return res.status(500).json({ error: error.message });
  }
};


const updateCategoria = async (req, res) => {
  try {
    const { categoriaId } = req.params;
    const [updated] = await models.Categoria.update(req.body, {
      where: { id: categoriaId }
    });
    if (updated) {
      
      return res.status(204).send();
    }
    throw new Error("Não existe categoria com ID = " + categoriaId);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteCategoria = async (req, res) => {
  try {
    const { categoriaId } = req.params;
    const deleted = await models.Categoria.destroy({
      where: { id: categoriaId }
    });
    if (deleted) {

      res.status(204).send();
    }
    throw new Error("Categoria não encontrado");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const getAllProdutosByCategoria = async (req, res) => {
  try {
    const { categoriaId } = req.params; 
    const produtos = await models.Produto.findAll({
      attributes: ['id', 'descricao'],
      include: {
          model: models.Categoria,
          where: { id: categoriaId },
          attributes: ['id', 'categoria'],
          as: "categoria"
      }
    });
    return res.status(200).json({ produtos });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


module.exports = {
    getAllCategorias,
    getCategoriaById,
    createCategoria,
    updateCategoria,
    deleteCategoria,
    getAllProdutosByCategoria,
};