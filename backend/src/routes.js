const { Router } = require("express");

const produtoController = require("./controllers/ProdutoController");
const categoriaController = require("./controllers/CategoriaController");

const router = Router();

// Retorna todos os produtos
router.get("/produtos", produtoController.getAllProdutos);
// Retorna um produto por seu id
router.get("/produtos/:produtoId", produtoController.getProdutoById);
// Cria um novo produto
router.post("/produtos", produtoController.createProduto);
// Atualiza um produto
router.put("/produtos/:produtoId", produtoController.updateProduto);
// Deleta um produto
router.delete("/produtos/:produtoId", produtoController.deleteProduto);

// Retorna todas as categorias
router.get("/categorias", categoriaController.getAllCategorias);
// Retorna uma categoria por seu id
router.get("/categorias/:categoriaId", categoriaController.getCategoriaById);
// Cria uma nova categoria
router.post("/categorias", categoriaController.createCategoria);
// Atualiza uma categoria
router.put("/categorias/:categoriaId", categoriaController.updateCategoria);
// Deleta uma categoria
router.delete("/categorias/:categoriaId", categoriaController.deleteCategoria);
// Lista todos os produtos de uma categoria, por seu id
router.get(
    "/categoria/:categoriaId/produtos",
    categoriaController.getAllProdutosByCategoria
);

module.exports = router;
