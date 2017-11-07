var express = require('express');
var ipfilter = require('express-ipfilter');
var app = express();

var ips = [
  '::ffff:127.0.0.1',
  '::ffff:192.168.0.2'
];
app.use(ipfilter(ips, {
  mode: 'allow'
}));

app.get('/', function(req, res) {
  res.send('hello');
});

app.listen(8080, function() {
  console.log('Server Start!');
});
