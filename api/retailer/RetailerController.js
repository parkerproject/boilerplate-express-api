const RetailerModel = require('./RetailerModel');

class RetailerController {
  index(req, res, next) {
    RetailerModel.index(req.query, (results, meta) => {
      res.json({ results, meta });
      next();
    });
  }
}

module.exports = new RetailerController();
