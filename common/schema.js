const expressJoi = require('express-joi');

const { Joi } = expressJoi;


module.exports = {

  retailerSchema: {
    country_id: Joi.types.Number(),
    code: Joi.types.String(),
    limit: Joi.types.Number().max(100),
    offset: Joi.types.Number(),
    retailer_type_id: Joi.types.Number(),
    price_group_id: Joi.types.Number(),
    currency_id: Joi.types.Number(),
    group: Joi.types.String(),
  },

  brandSchema: {
    name: Joi.types.String(),
    limit: Joi.types.Number().max(100),
    offset: Joi.types.Number(),
  },

  categorySchema: {
    name: Joi.types.String(),
    limit: Joi.types.Number().max(100),
    offset: Joi.types.Number(),
  },

  colorSchema: {
    name: Joi.types.String(),
    limit: Joi.types.Number().max(100),
    offset: Joi.types.Number(),
  },

  countrySchema: {
    country_code: Joi.types.String(),
    limit: Joi.types.Number().max(100),
    offset: Joi.types.Number(),
  },

  departmentSchema: {
    name: Joi.types.String(),
    limit: Joi.types.Number().max(100),
    offset: Joi.types.Number(),
  },

};
