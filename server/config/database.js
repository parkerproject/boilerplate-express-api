import mysql from 'mysql';

const config = {
  production: {
    host: '127.0.0.1',
    user: 'data user',
    password: 'test',
    database: 'database',
  },
  development: {
    host: process.env.MYSQL_DEV_HOST,
    user: process.env.MYSQL_DEV_USER,
    password: process.env.MYSQL_DEV_PASSWORD,
    database: 'ginger',
    port: '3306',
  },
  qa: {
    host: process.env.MYSQL_QA_HOST,
    user: process.env.MYSQL_QA_USER,
    password: process.env.MYSQL_QA_PASSWORD,
    database: 'ginger',
    port: '3306',
  },
};


const connection = config[process.env.NODE_ENV] || config.development;

const db = mysql.createConnection(connection);

export default db;