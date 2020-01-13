module.exports = function () {
  var mysql = require('mysql');
  var conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'attendance'
  });
  return conn;
};