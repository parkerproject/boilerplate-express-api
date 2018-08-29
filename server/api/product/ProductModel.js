// import { pickBy, identity, map } from 'lodash';
import db from '../../config/database';
// import solrClient from '../../config/solr';

class ProductModel {
  all(query, cb) {
    const { limit = 15, offset = 0, name } = query;

    let sql = `select ret.name AS retailer,
                p.name, c.code_2 AS country,
                t.translation AS brand,
                p.image_filename,
                s.original_price,
                sh.is_in_stock,
                sh.is_restocked,
                sh.price
                from ginger.products p
                LEFT JOIN ginger.retailers ret on ret.id = p.retailer_id
                LEFT JOIN ginger.countries c on c.id = p.country_id
                LEFT JOIN ginger.products_taxonomies ptx on ptx.product_id = p.id
                LEFT JOIN ginger.taxonomies tx on ptx.taxonomy_id = tx.id
                LEFT JOIN ginger.terms t on t.parent_term_id = tx.term_id
                LEFT JOIN ginger.skus s on s.product_id = p.id
                LEFT JOIN ginger.sku_history sh on sh.sku_id = s.id
                WHERE p.active = 1
                LIMIT ${limit} OFFSET ${offset};`;

    // const solrQuery = solrClient.createQuery().q({ title_t: 'laptop' }).start(0).rows(5);


    if (name) {
      let translations = name.split(',');
      translations = translations.map(val => `"${val}"`).join(',');
      sql = `select tx.term_id, tx.parent_id, t.translation, tx.depth from taxonomies tx
                  LEFT JOIN terms t on tx.term_id = t.id
                  WHERE tx.depth = 3 AND t.translation IN (${translations})
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


    // solrClient.search(solrQuery, (err, obj) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     cb({});
    //   }
    // });
  }

  byId(id) {
    return id;
  }
}

export default new ProductModel();
