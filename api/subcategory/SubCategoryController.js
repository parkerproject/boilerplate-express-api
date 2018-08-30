const SubCategoryModel = require('./SubCategoryModel');

class SubCategoryController {
  all(req, res) {
    SubCategoryModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
module.exports = new SubCategoryController();
