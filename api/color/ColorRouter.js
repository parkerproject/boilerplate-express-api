const express = require('express');
const expressJoi = require('express-joi');
const controller = require('./ColorController');
const { colorSchema } = require('../../common/schema');

module.exports = express.Router().get('/', expressJoi.joiValidate(colorSchema), controller.all);
