const CategoryModel = require('./CategoryModel');

class CategoryController {
  all(req, res) {
    CategoryModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
module.exports = new CategoryController();
