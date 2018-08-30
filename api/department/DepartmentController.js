const DepartmentModel = require('./DepartmentModel');

class DepartmentController {
  all(req, res) {
    DepartmentModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
module.exports = new DepartmentController();
