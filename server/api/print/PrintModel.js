// import { pickBy, identity, map } from 'lodash';
import db from '../../config/database';

class PrintModel {
  all(query, cb) {
    const { limit = 15, offset = 0, name } = query;

    let sql = `select e.id, t.translation from ginger.entities e
                LEFT JOIN ginger.entity_types et on e.entity_type_id = et.id
                LEFT JOIN ginger.terms t on t.parent_term_id = e.term_id
                LEFT JOIN ginger.locales l on l.id = t.locale_id
                where et.code = 'pattern_or_graphic' and l.code = 'en_GB' LIMIT ${limit} OFFSET ${offset};`;


    if (name) {
      let translations = name.split(',');
      translations = translations.map(val => `"${val}"`).join(',');
      sql = `select e.id, t.translation from ginger.entities e
                   LEFT JOIN ginger.entity_types et on e.entity_type_id = et.id
                   LEFT JOIN ginger.terms t on t.parent_term_id = e.term_id
                   LEFT JOIN ginger.locales l on l.id = t.locale_id
                   where et.code = 'pattern_or_graphic' and l.code = 'en_GB' and t.translation IN (${translations}) LIMIT ${limit} OFFSET ${offset};`;
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

export default new PrintModel();
