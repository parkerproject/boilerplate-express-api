
const dotenv = require('dotenv');

dotenv.config();
const Server = require('./server');
const routes = require('./routes');

Server.router(routes).listen(process.env.PORT);
