const BrandModel = require('./BrandModel');

class BrandController {
  all(req, res) {
    BrandModel.all(req.query, (results, meta) => {
      res.json({ results, meta });
    });

    //
    // res.boom.badRequest(e);
  }
}
module.exports = new BrandController();
