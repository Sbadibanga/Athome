import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();
const dbConnection = mysql.createConnection({
    host: process.env.HOST,
    user:'root',
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    port: process.env.PORT
  });

module.exports = dbConnection;