const express = require('express');
const expressJoi = require('express-joi');
const controller = require('./CategoryController');
const { categorySchema } = require('../../common/schema');

module.exports = express.Router().get('/', expressJoi.joiValidate(categorySchema), controller.all);
