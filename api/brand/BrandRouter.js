const express = require('express');
const controller = require('./BrandController');

module.exports = express.Router().get('/', controller.all);
