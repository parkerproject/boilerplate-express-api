const express = require('express');
const expressJoi = require('express-joi');
const controller = require('./MarketController');
const { marketSchema } = require('../../common/schema');

module.exports = express.Router().get('/', expressJoi.joiValidate(marketSchema), controller.all);
