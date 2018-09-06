const ColorModel = require('./ColorModel');

class ColorController {
  all(req, res) {
    ColorModel.all(req.query, (results, meta) => {
      res.json({ results, meta });
    });
  }
}
module.exports = new ColorController();
