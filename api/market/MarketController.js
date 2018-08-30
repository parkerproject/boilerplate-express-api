const MarketModel = require('./MarketModel');

class MarketController {
  all(req, res) {
    MarketModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
module.exports = new MarketController();
