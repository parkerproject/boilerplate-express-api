const ProductModel = require('./ProductModel');

class ProductController {
  all(req, res) {
    ProductModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
module.exports = new ProductController();
