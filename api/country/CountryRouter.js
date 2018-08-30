const express = require('express');
const controller = require('./CountryController');

module.exports = express.Router().get('/', controller.all);
