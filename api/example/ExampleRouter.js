const express = require('express');
const expressJoi = require('express-joi');
const controller = require('./ExampleController');
const { exampleSchema } = require('../../common/schema');

module.exports = express.Router().get('/', expressJoi.joiValidate(exampleSchema), controller.all);
