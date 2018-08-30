const express = require('express');
const controller = require('./RetailerController');

module.exports = express.Router().get('/', controller.all);
