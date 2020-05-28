const express = require('express');
const cors = require('cors');
const routes  = require('./routes');

const app = express();

app.use(cors());
//Convertendo JSON em objeto do javaScript, logo de início.
app.use(express.json());
app.use(routes);

// app.listen(9099);
module.exports = app;
