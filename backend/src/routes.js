const { Router } = require('express');
const controllers = require('./controllers');

const router = Router();


router.get('/produtos', controllers.getAllProdutos); //Retorna todos os produtos
router.get('/produtos/:produtoId', controllers.getProdutoById); //Retorna um produto por seu ID
router.post('/produtos', controllers.createProduto); //Cria um novo produto
router.put('/produtos/:produtoId', controllers.updateProduto); //Atualiza um produto
router.delete('/produtos/:produtoId', controllers.deleteProduto); //Deleta um produto
router.get('/categorias', controllers.getAllCategorias); //Retorna todas as categorias


module.exports = router;