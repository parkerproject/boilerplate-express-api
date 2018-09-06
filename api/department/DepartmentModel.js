const mysql = require('mysql');
const db = require('../../config/database');

class DepartmentModel {
  all(query, cb) {
    let { limit = 15, offset = 0 } = query;
    limit = Number(limit);
    offset = Number(offset);

    let sql = `select tx.term_id, tx.parent_id, t.translation, tx.depth from taxonomies tx
                LEFT JOIN terms t on tx.term_id = t.id
                WHERE tx.depth = 2
                GROUP BY t.translation LIMIT ${offset}, ${limit}`;


    if (query.name) {
      let translations = query.name.split(',');
      translations = translations.map(val => mysql.escape(val)).join(',');
      sql = `select tx.term_id, tx.parent_id, t.translation, tx.depth from taxonomies tx
                  LEFT JOIN terms t on tx.term_id = t.id
                  WHERE tx.depth = 2 AND t.translation IN (${translations})
                  GROUP BY t.translation LIMIT ${offset}, ${limit}`;
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

module.exports = new DepartmentModel();
