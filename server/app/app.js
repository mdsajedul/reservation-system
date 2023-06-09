
const express = require('express');
const { notFoundHandler, globalErrorHandler } = require('./errorHandlers');

const app = express();

app.use(require('./middleware'))
app.use(require('./routes'))
app.use(notFoundHandler)
app.use(globalErrorHandler)

module.exports = app;