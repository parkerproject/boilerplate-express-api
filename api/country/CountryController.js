const CountryModel = require('./CountryModel');

class CountryController {
  all(req, res) {
    CountryModel.all(req.query, (results, meta) => {
      res.json({ results, meta });
    });
  }
}
module.exports = new CountryController();
