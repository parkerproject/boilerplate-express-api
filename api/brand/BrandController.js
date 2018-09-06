const BrandModel = require('./BrandModel');

class BrandController {
  all(req, res) {
    BrandModel.all(req.query, (results, meta) => {
      res.json({ results, meta });
    });
  }
}
module.exports = new BrandController();
