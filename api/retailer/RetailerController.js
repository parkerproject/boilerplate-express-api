const RetailerModel = require('./RetailerModel');

class RetailerController {
  index(req, res, next) {
    console.log(next);
    /*

    */
    RetailerModel.index(req.query, (results, meta) => {
      res.json({ results, meta });
    });

    //
    // res.boom.badRequest(e);
  }
}

module.exports = new RetailerController();
