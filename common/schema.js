const expressJoi = require('express-joi');

const { Joi } = expressJoi;


module.exports = {

  retailerSchema: {
    country_id: Joi.types.Number(),
    retailer_code: Joi.types.String(),
    limit: Joi.types.Number(),
    offset: Joi.types.Number(),
    retailer_type_id: Joi.types.Number(),
    price_group_id: Joi.types.Number(),
    currency_id: Joi.types.Number(),
    group: Joi.types.String(),
  },

};
