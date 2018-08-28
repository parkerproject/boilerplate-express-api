import db from '../../config/database';

class RetailerModel {
  all(query, cb) {
    const { code, limit = 15, offset = 0 } = query;

    let sql = `SELECT * FROM retailers LIMIT ${limit} OFFSET ${offset}`;

    if (code) {
      const retailerCode = code ? code.split(',') : '';
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

export default new RetailerModel();
