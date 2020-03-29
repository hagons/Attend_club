import mysql from 'mysql';

const conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'attend'
});

export default conn;
