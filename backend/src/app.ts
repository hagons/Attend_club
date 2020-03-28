const app = require('./routes/express')();
const att = require('./routes/express')();
const getTime = require('./lib/getTime');

// const routes = require('./routes/po/po_route')(att);
// att.use('/po/', routes);
// const date_sort = require('./routes/po/po_date_sort')(att);
// att.use('/po/', date_sort);
// const date_in = require('./routes/po/po_date_in')(att);
// att.use('/po/', date_in);

const date_in = require('./routes/date_in')(att);
att.use('/', date_in);
const date_sort = require('./routes/date_sort')(att);
att.use('/', date_sort);
const routes = require('./routes/route')(att);
att.use('/', routes);

att.listen(8080, () => {
  console.log(getTime.Date(), 'Server Start! 8080');
});

app.get('/', function(req, res) {
  console.log(getTime.Date(), 'User Rending 80 port site!');
  res.send('/');
});

app.listen(80, () => {
  console.log(getTime.Date(), 'Server Start! 80');
});

// var express = require('express');
// var ipfilter = require('express-ipfilter');
// var app = express();

// var ips = [
//   '::ffff:127.0.0.1',
//   '::ffff:192.168.0.2'
// ];
// app.use(ipfilter(ips, {
//   mode: 'allow'
// }));

// app.get('/', function(req, res) {
//   res.send('hello');
// });

// app.listen(8080, function() {
//   console.log('Server Start!');
// });
