const MarketModel = require('./MarketModel');

class MarketController {
  all(req, res) {
    MarketModel.all(req.query, (results, meta) => {
      res.json({ results, meta });
    });

    //
    // res.boom.badRequest(e);
  }
}
module.exports = new MarketController();
