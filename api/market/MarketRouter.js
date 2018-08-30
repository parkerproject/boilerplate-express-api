const express = require('express');
const controller = require('./MarketController');

module.exports = express.Router().get('/', controller.all);
