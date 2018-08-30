const express = require('express');
const controller = require('./ProductController');

module.exports = express.Router().get('/', controller.all);
