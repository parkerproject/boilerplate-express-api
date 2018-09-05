const mysql = require('mysql');
const db = require('../../config/database');

class BrandModel {
  all(query, cb) {
    const { limit = 15, offset = 0, name } = query;

    let sql = `select r.name AS retailer, e.id, e.term_id, t.translation AS brand from entities e
                LEFT JOIN entity_types et on e.entity_type_id = et.id
                LEFT JOIN terms t on t.parent_term_id = e.term_id
                LEFT JOIN locales l on l.id = t.locale_id
                LEFT JOIN entities_products ep on ep.entity_id = e.id
                LEFT JOIN products p on p.id = ep.product_id
                LEFT JOIN retailers r on r.id = p.retailer_id
                where et.code = 'brand' and l.code = 'en_GB' LIMIT ${mysql.escape(limit)} OFFSET ${mysql.escape(offset)};`;


    if (name) {
      let translations = name.split(',');
      translations = translations.map(val => mysql.escape(val)).join(',');
      sql = `select r.name AS retailer, e.id, e.term_id, t.translation AS brand from entities e
                   LEFT JOIN entity_types et on e.entity_type_id = et.id
                   LEFT JOIN terms t on t.parent_term_id = e.term_id
                   LEFT JOIN locales l on l.id = t.locale_id
                   LEFT JOIN entities_products ep on ep.entity_id = e.id
                   LEFT JOIN products p on p.id = ep.product_id
                   LEFT JOIN retailers r on r.id = p.retailer_id
                   where et.code = 'brand' and l.code = 'en_GB' and t.translation IN (${translations}) LIMIT ${mysql.escape(limit)} OFFSET ${mysql.escape(offset)};`;
    }

    console.log(sql);


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
