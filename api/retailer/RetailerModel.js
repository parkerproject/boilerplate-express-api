// import { pickBy, identity, map } from 'lodash';
const db = require('../../config/database');

class RetailerModel {
  all(query, cb) {
    const { limit = 15, offset = 0 } = query;

    let sql = `SELECT
                name,
                code,
                price_group_id,
                currency_id,
                retailer_type_id
                FROM retailers LIMIT ${limit} OFFSET ${offset}`;


    /* Implement stored procedures
       1. get the defined query params from the request
          => const conditions = pickBy(query, identity);
       2. refactor the query to use stored procedures
    */


    if (query.retailer_code) {
      const retailerCode = query.retailer_code ? query.retailer_code.split(',') : '';
      sql = `SELECT * FROM retailers WHERE code ="${retailerCode}" LIMIT ${limit} OFFSET ${offset}`;
    }

    db.query(sql, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  }

  byId(id) {
    return id;
  }
}

module.exports = new RetailerModel();
