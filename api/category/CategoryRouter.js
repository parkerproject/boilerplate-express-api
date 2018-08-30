const express = require('express');
const controller = require('./CategoryController');

module.exports = express.Router().get('/', controller.all);
