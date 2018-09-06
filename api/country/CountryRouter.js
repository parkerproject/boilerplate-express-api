const express = require('express');
const expressJoi = require('express-joi');
const controller = require('./CountryController');
const { countrySchema } = require('../../common/schema');

module.exports = express.Router().get('/', expressJoi.joiValidate(countrySchema), controller.all);
