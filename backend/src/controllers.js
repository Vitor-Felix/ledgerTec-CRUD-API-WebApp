const models = require("../database/models");


const getAllProdutos = async (req, res) => {
    try {
      const produtos = await models.Produto.findAll({
        attributes: ['id', 'descricao'],
        include: {
            model: models.Categoria,
            attributes: ['categoria'],
            as: "categoria"
        }
      });
      return res.status(200).json({ produtos });
    } catch (error) {
      return res.status(500).send(error.message);
    }
};


const getProdutoById = async (req, res) => {
    try {
      const { produtoId } = req.params;
      const produto = await models.Produto.findOne({
        where: { id: produtoId },
        attributes: ['id', 'descricao'],
        include: {
            model: models.Categoria,
            attributes: ['categoria'],
            as: "categoria"
        }
      });
      if (produto) {
        return res.status(200).json({ produto });
      }
      return res.status(404).send("Não existe produto com ID = " + produtoId);
    } catch (error) {
      return res.status(500).send(error.message);
    }
};


const createProduto = async (req, res) => {
    try {
      const produto = await models.Produto.create(req.body);

      return res.status(201).json({ 'produtoId': produto.id });
    } catch (error) {
      
      return res.status(500).json({ error: error.message });
    }
};


const updateProduto = async (req, res) => {
  try {
    const { produtoId } = req.params;
    const [updated] = await models.Produto.update(req.body, {
      where: { id: produtoId }
    });
    if (updated) {
      // O correto aqui seria status 204, mas deixei 200 para melhor visualização.
      //return res.status(204);
      const updatedPost = await models.Produto.findOne({
        attributes: ['id', 'descricao'],
        include: {
            model: models.Categoria,
            attributes: ['categoria'],
            as: "categoria"
        }
      });

      return res.status(200).json({ produto: updatedPost });
    }
    throw new Error("Não existe produto com ID = " + produtoId);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteProduto = async (req, res) => {
  try {
    const { produtoId } = req.params;
    const deleted = await models.Produto.destroy({
      where: { id: produtoId }
    });
    if (deleted) {
      // O correto aqui seria status 204, mas deixei 200 para melhor visualização.
      //return res.status(204);
      res.status(200).send("Produto removido com sucesso");
    }
    throw new Error("Produto não encontrado");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


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


module.exports = {
    getAllProdutos,
    getProdutoById,
    createProduto,
    updateProduto,
    deleteProduto,
    getAllCategorias
  };