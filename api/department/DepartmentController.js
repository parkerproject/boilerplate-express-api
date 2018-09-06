const DepartmentModel = require('./DepartmentModel');

class DepartmentController {
  all(req, res) {
    DepartmentModel.all(req.query, (results, meta) => {
      res.json({ results, meta });
    });
  }
}
module.exports = new DepartmentController();
