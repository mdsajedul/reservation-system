
const express = require('express')

const app = express();

app.use(require('./middleware'))
app.use(require('./routes'))

module.exports = app;