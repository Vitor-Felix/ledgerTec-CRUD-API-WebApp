const express = require('express')
//
const bodyParser = require('body-parser')
// const db = require('../database/models')
const db = require('../database/models/')

//
const routes = express.Router()

//
routes.get('/categorias', (request, response) => {
    // console.log(db.Categoria.findAll())  
    return db.Categoria.findAll({attributes: ['id', 'categoria']})
    .then((categorias) => response.send(categorias))
    .catch((erro) => {
            console.log('There was an error querying contacts', JSON.stringify(erro))
            return response.send(error)
        })    
})

routes.get('/produtos', (request, response) => {
    // console.log(db.Categoria.findAll())  
    return db.Produto.findAll({attributes: ['categoriaId', 'descricao']})
    .then((categorias) => response.send(categorias))
    .catch((erro) => {
            console.log('There was an error querying contacts', JSON.stringify(erro))
            return response.send(error)
        })    
})
//  

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