// import { pickBy, identity, map } from 'lodash';
const db = require('../../config/database');

class DepartmentModel {
  all(query, cb) {
    const { limit = 15, offset = 0, name } = query;

    let sql = `select tx.term_id, tx.parent_id, t.translation, tx.depth from taxonomies tx
                LEFT JOIN terms t on tx.term_id = t.id
                WHERE tx.depth = 2
                GROUP BY t.translation LIMIT ${limit} OFFSET ${offset}`;


    if (name) {
      let translations = name.split(',');
      translations = translations.map(val => `"${val}"`).join(',');
      sql = `select tx.term_id, tx.parent_id, t.translation, tx.depth from taxonomies tx
                  LEFT JOIN terms t on tx.term_id = t.id
                  WHERE tx.depth = 2 AND t.translation IN (${translations})
                  GROUP BY t.translation LIMIT ${limit} OFFSET ${offset}`;
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

module.exports = new DepartmentModel();
