const Express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const os = require('os');
const cookieParser = require('cookie-parser');
const boom = require('express-boom');
const swaggerify = require('./common/swagger');
const logger = require('./common/logger');

const app = new Express();


class ExpressServer {
  constructor() {
    app.set('appPath', `${__dirname}client`);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(Express.static(`${__dirname}/public`));
    app.use(boom());
  }

  router(routes) {
    swaggerify(app, routes);
    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = p => () => logger.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${p}}`);
    http.createServer(app).listen(port, welcome(port));
    return app;
  }

  errorHandler() {
    process.on('unhandledRejection', (reason, p) => {
      console.log(`process=> ${p}`);
    });
    process.on('uncaughtException', error => {
      console.log(`process=> ${error}`);
    });
  }
}

module.exports = new ExpressServer();
