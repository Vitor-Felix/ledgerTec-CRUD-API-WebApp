const express = require('express')

const app = express()

app.get('/', (request, response) => {
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

app.listen(8088)

