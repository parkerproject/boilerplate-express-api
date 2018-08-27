import knex from 'knex';

const connection = require('./config.js').get(process.env.NODE_ENV);

const db = knex({
  client: 'mysql',
  connection,
});

export default db;
