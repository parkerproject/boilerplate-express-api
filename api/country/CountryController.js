const CountryModel = require('./CountryModel');

class CountryController {
  all(req, res) {
    CountryModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
module.exports = new CountryController();
