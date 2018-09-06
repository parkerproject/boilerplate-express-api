const mysql = require('mysql');
const db = require('../../config/database');

class BrandModel {
  all(query, cb) {
    let { limit = 15, offset = 0 } = query;
    limit = Number(limit);
    offset = Number(offset);

    let sql = `select e.id, e.term_id, t.translation from entities e
                LEFT JOIN entity_types et on e.entity_type_id = et.id
                LEFT JOIN terms t on t.parent_term_id = e.term_id
                LEFT JOIN locales l on l.id = t.locale_id
                where et.code = 'brand' and l.code = 'en_GB' LIMIT ${offset}, ${limit};`;


    if (query.name) {
      let translations = query.name.split(',');
      translations = translations.map(val => mysql.escape(val)).join(',');
      sql = `select e.id, e.term_id, t.translation from entities e
                   LEFT JOIN entity_types et on e.entity_type_id = et.id
                   LEFT JOIN terms t on t.parent_term_id = e.term_id
                   LEFT JOIN locales l on l.id = t.locale_id
                   where et.code = 'brand' and l.code = 'en_GB' and t.translation IN (${translations}) LIMIT ${offset}, ${limit};`;
    }


    db.query(sql, (err, results) => {
      if (err) throw err;
      cb(results, { total: results.length, limit, offset });
    });
  }

  byId(id) {
    return id;
  }
}

module.exports = new BrandModel();
