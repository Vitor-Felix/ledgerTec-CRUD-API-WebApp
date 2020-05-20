const express = require('express')
const routes  = require('./routes')

const app = express()

//Convertendo JSON em objeto do javaScript, logo de início.
app.use(express.json())
app.use(routes)

app.listen(9099)

