const ColorModel = require('./ColorModel');

class ColorController {
  all(req, res) {
    ColorModel.all(req.query, r => {
      res.json({
        results: r,
        meta: {},
      });
    });

    //
    // res.boom.badRequest(e);
  }
}
module.exports = new ColorController();
