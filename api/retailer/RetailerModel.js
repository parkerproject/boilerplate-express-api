const { pickBy, identity, omit } = require('lodash');
const mysql = require('mysql');
const db = require('../../config/database');

class RetailerModel {
  index(query, cb) {
    const { limit = 15, offset = 0 } = query;
    let where = false;
    const limitOffset = `LIMIT ${mysql.escape(offset)}, ${mysql.escape(limit)}`;
    let preparedQuery = `SELECT name, country_id, code, price_group_id, currency_id, retailer_type_id
                         FROM retailers`;

    const totalQuery = 'SELECT count(*) AS total FROM retailers';

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
    let conditions = definedParamsKeys.map(val => {
      const assignRightType = Number(definedParams[val]);

      let str = Number.isNaN(assignRightType)
        ? `${val} = "${mysql.escape(definedParams[val])}"`
        : `${val} = ${mysql.escape(definedParams[val])}`;


      /*  map retailer_code to code */
      if (val === 'retailer_code') {
        str = `code = "${mysql.escape(definedParams[val])}"`;
      }

      return str;
    });

    conditions = conditions.join(' AND ');

    preparedQuery = where ? `${preparedQuery} WHERE ${conditions} ${limitOffset}` : `${preparedQuery} ${limitOffset}`;


    db.query(preparedQuery, (err, results) => {
      if (err) console.log(err);
      db.query(totalQuery, (error, total) => {
        if (error) console.log(error);
        cb(results, { total: total[0].total, limit, offset });
      });
    });
  }

  end() {
    return db.end();
  }
}

module.exports = new RetailerModel();
