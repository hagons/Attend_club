import express from 'express';
import { custumDate } from './lib/getTime';
import { IpFilter as ipFilter } from 'express-ipfilter';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(
//   // console.log(req.connection.remoteAddress);
//   ipFilter(['::ffff:192.168.0.2', '::1', '::ffff:127.0.0.1'], {
//     mode: 'allow'
//   })
// );

app.use('/', routes);

app.listen(80, () => {
  console.log(custumDate(), 'Server Start! 80');
});
