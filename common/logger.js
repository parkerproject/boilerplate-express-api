const pino = require('pino');

module.exports = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL,
});
