const express = require('express');
const controller = require('./PrintController');

module.exports = express.Router().get('/', controller.all);
