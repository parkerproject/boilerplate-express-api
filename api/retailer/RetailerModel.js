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

    // const totalQuery = 'SELECT count(*) FROM retailers';


    let definedParams = pickBy(query, identity);
    definedParams = omit(definedParams, ['limit', 'offset']);

    const definedParamsKeys = Object.keys(definedParams);
    if (definedParamsKeys.length > 0) where = true;

    let conditions = definedParamsKeys.map(val => {
      const assignRightType = Number(definedParams[val]);

      let str = Number.isNaN(assignRightType)
        ? `${val} = "${mysql.escape(definedParams[val])}"`
        : `${val} = ${mysql.escape(definedParams[val])}`;

      if (val === 'retailer_code') {
        str = `code = "${mysql.escape(definedParams[val])}"`;
      }

      return str;
    });

    conditions = conditions.join(' AND ');

    preparedQuery = where ? `${preparedQuery} WHERE ${conditions} ${limitOffset}` : `${preparedQuery} ${limitOffset}`;


    // db.query(preparedQuery, (err, results) => {
    //   if (err) throw err;
    //   db.query(totalQuery, (error, total) => {
    //     if (error) throw error;
    //     cb(results, total);
    //   });
    // });

    db.query(preparedQuery, (err, results) => {
      if (err) throw err;
      cb(results, { total: null, limit, offset });
    });
  }

  end() {
    return db.end();
  }
}

module.exports = new RetailerModel();
