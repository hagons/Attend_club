module.exports = function () {
  var express = require('express');
  var ipfilter = require('express-ipfilter');
  var bodyParser = require('body-parser');
  var ejs = require('ejs');
  // var ips = [
  // 	'::ffff:192.168.0.1',
  //   '::ffff:119.18.119.147',
  //   '::ffff:127.0.0.1',
  //   '::1'
  // ];
  var ips = [];
  var app = express();
  app.use(
    ipfilter(ips, {
      mode: 'deny',
      errorMessage: `<html><body><h1>ERROR.<br/>USE GDR2312 wifi.<br/>Call administor.</h1></body></html>`
    })
  );
  app.use(express.static('public'));
  app.set('view engine', 'ejs');
  app.set('views', __dirname + '../views');
  app.use(bodyParser.urlencoded({ extended: false }));
  return app;
};
