const express = require('express');
const controller = require('./SubCategoryController');

module.exports = express.Router().get('/', controller.all);
