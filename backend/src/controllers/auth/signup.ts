import { custumDate } from '../../lib/getTime';
import urlencode from 'urlencode';
import { RequestHandler } from 'express';
import conn from '../../lib/databases';

export const signup: RequestHandler = (req, res) => {
  const join_type = req.body.join_type;
  const join_names = urlencode.decode(req.body.join_names);
  // if(join_type=='po'){
  //   join_type = 'po_member'
  // }else{
  //   join_type = 'mac_member'
  // };
  const sql = 'insert into mac_member (name) value (?)';
  // var sql = 'insert into '+join_type+' (name) value (?)';

  // var mysql = require('mysql');
  // var v=mysql.format(sql, join_names);
  // console.log(v);

  conn.query(sql, join_names, function(err, rows) {
    if (err) {
      console.log(custumDate(), err);
      res.status(500).send('잘못 입력되었습니다.');
    } else {
      console.log(custumDate() + ' : ' + join_names + ', Join! (MAC)');
      res.send(join_names + '님이 성공적으로 입력되었습니다.');
    }
  });
};
