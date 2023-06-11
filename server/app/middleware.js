const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const middleware = [
    morgan('dev'),
    cors(),
    express.json(),
    express.static(`${__dirname}/uploads`)
]

module.exports = middleware