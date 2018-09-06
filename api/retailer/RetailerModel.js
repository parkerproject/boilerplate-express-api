const { pickBy, identity, omit } = require('lodash');
const mysql = require('mysql');
const db = require('../../config/database');


class RetailerModel {
  index(query, cb) {
    let { limit = 15, offset = 0 } = query;
    limit = Number(limit);
    offset = Number(offset);
    let where = false;
    const limitOffset = `LIMIT ${offset}, ${limit}`;
    let preparedQuery = `SELECT name, country_id, code, price_group_id, currency_id, retailer_type_id
                         FROM retailers`;

    /*
    pick all the defined params and ignore limit and filter param
    */
    let definedParams = pickBy(query, identity);
    definedParams = omit(definedParams, ['limit', 'offset']);

    /*
     set the WHERE flag to true if there are params in the request
   */
    const definedParamsKeys = Object.keys(definedParams);
    if (definedParamsKeys.length > 0) where = true;

    /*
    clean up the params making sure numbers are set as numbers and the rest ignored
   */
    let conditions = definedParamsKeys.map(val => `${val} = ${mysql.escape(definedParams[val])}`);

    conditions = conditions.join(' AND ');

    preparedQuery = where ? `${preparedQuery} WHERE ${conditions} ${limitOffset}` : `${preparedQuery} ${limitOffset}`;


    db.query(preparedQuery, (err, results) => {
      if (err) console.log(err);
      cb(results, { total: results.length, limit, offset });
    });
  }
}

module.exports = new RetailerModel();
