const express = require('express');
const controller = require('./ColorController');

module.exports = express.Router().get('/', controller.all);
