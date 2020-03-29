import { custumDate } from '.';
import mysql from 'mysql';

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'attend'
});

conn.connect(err => {
  if (err) throw err;
  console.log(custumDate(), 'Connected as id ' + conn.threadId);
});

export default conn;
