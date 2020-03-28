import mysql from 'mysql';

const conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'attendance'
});

export default conn;
