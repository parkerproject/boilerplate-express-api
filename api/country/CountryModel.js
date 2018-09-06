const mysql = require('mysql');
const db = require('../../config/database');

class CountryModel {
  all(query, cb) {
    let { limit = 15, offset = 0 } = query;
    limit = Number(limit);
    offset = Number(offset);

    let sql = `select * from countries LIMIT ${offset}, ${limit};`;


    if (query.country_code) {
      let translations = query.country_code.split(',');
      translations = translations.map(val => mysql.escape(val)).join(',');
      sql = `select * from countries where code_3 IN (${translations}) LIMIT ${offset}, ${limit};`;
    }


    db.query(sql, (err, results) => {
      if (err) throw err;
      cb(results, { total: results.length, limit, offset });
    });
  }
}

module.exports = new CountryModel();
