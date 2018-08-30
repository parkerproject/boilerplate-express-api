const express = require('express');
const controller = require('./MaterialController');

module.exports = express.Router().get('/', controller.all);
