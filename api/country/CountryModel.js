// import { pickBy, identity, map } from 'lodash';
const db = require('../../config/database');

class CountryModel {
  all(query, cb) {
    const { limit = 15, offset = 0 } = query;

    let sql = `select * from countries LIMIT ${limit} OFFSET ${offset};`;


    if (query.country_code) {
      let translations = query.country_code.split(',');
      translations = translations.map(val => `"${val}"`).join(',');
      sql = `select * from countries where code_3 IN (${translations}) LIMIT ${limit} OFFSET ${offset};`;
    }

    /* Implement stored procedures
       1. get the defined query params from the request
          => const conditions = pickBy(query, identity);
       2. refactor the query to use stored procedures
    */


    db.query(sql, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  }

  byId(id) {
    return id;
  }
}

module.exports = new CountryModel();
