const express = require('express')

const routes = express.Router()

// Produto (id, id_categoria, descricao).
// Categoria (id, categoria).
// #########################################
// A API deve possuir 5 rotas:

//     Uma rota para retornar todos os produtos cadastrados.
//     Uma rota para retornar um produto por sua chave primária.
//     Uma rota para inserir um produto.
//     Uma rota para atualizar um produto.
//     Uma rota para remover um produto.

routes.post('/users', (request, response) => {
    const body = request.body

    console.log(body)

    return response.json({
        produto: {
            id: 4438,
            id_categoria: 3333,
            descricao: 'muito bom!'
        },
        categoria: {
            id: 3333,
            categoria: 'notebook'
        }
    })
})

module.exports = routes
