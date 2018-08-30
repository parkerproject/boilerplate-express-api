const express = require('express');
const controller = require('./DepartmentController');

module.exports = express.Router().get('/', controller.all);
