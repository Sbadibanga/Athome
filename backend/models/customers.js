import mysql from 'mysql'
import config from '../config';

const cusConnection = mysql.createConnection({
    host: config.HOST,
    user:'root',
    password:config.PASSWORD,
    database:config.DATABASE,
    port: config.PORT
  });

cusConnection.query('SELECT * FROM customersTable ')
