const BrandModel = require('./BrandModel');

class BrandController {
  all(req, res) {
    BrandModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
module.exports = new BrandController();
