const express = require('express');
const expressJoi = require('express-joi');
const controller = require('./BrandController');
const { brandSchema } = require('../../common/schema');

module.exports = express.Router().get('/', expressJoi.joiValidate(brandSchema), controller.all);
