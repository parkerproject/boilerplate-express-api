const express = require('express');
const expressJoi = require('express-joi');
const controller = require('./DepartmentController');
const { departmentSchema } = require('../../common/schema');

module.exports = express.Router().get('/', expressJoi.joiValidate(departmentSchema), controller.all);
