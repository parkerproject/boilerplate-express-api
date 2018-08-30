const PrintModel = require('./PrintModel');

class PrintController {
  all(req, res) {
    PrintModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
module.exports = new PrintController();
