import express from 'express';
import { custumDate } from './lib';
// import { IpFilter as ipFilter } from 'express-ipfilter';
import routes from './routes';
import bodyParser from 'body-parser';
import multer from 'multer';

const app = express();
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(upload.none());
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
