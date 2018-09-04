const express = require('express');
const expressJoi = require('express-joi');
const controller = require('./RetailerController');
const { retailerSchema } = require('../../common/schema');

module.exports = express.Router().get('/', expressJoi.joiValidate(retailerSchema), controller.index);
