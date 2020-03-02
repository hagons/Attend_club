module.exports = function() {
  const mysql = require('mysql');
  const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'attendance',
  });
  return conn;
};
