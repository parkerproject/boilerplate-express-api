const CategoryModel = require('./CategoryModel');

class CategoryController {
  all(req, res) {
    CategoryModel.all(req.query, (results, meta) => {
      res.json({ results, meta });
    });
  }
}
module.exports = new CategoryController();
