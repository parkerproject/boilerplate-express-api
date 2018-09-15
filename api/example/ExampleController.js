const ExampleModel = require('./ExampleModel');

class ExampleController {
  all(req, res) {
    ExampleModel.all(req.query, (results, meta) => {
      res.json({ 'name': 'parker' });
    });
  }
}
module.exports = new ExampleController();
