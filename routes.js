const exampleRouter = require('./api/example/ExampleRouter');

const API_BASE = '/api/v1';

module.exports = function routes(app) {
  app.use(`${API_BASE}/example`, exampleRouter);
};
