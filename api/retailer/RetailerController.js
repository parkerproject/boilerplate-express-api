const RetailerModel = require('./RetailerModel');

class RetailerController {
  all(req, res) {
    RetailerModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}

module.exports = new RetailerController();
