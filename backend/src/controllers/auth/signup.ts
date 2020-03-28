import { custumDate } from '../../lib/getTime';
import urlencode from 'urlencode';
import { RequestHandler } from 'express';
import conn from '../../lib/databases';

export const signup: RequestHandler = (req, res) => {
  // const joinType = req.body.join_type;
  const joinNames = urlencode.decode(req.body.join_names);
  // if(joinType=='po'){
  //   joinType = 'po_member'
  // }else{
  //   joinType = 'mac_member'
  // };
  const sql = 'insert into mac_member (name) value (?)';
  // var sql = 'insert into '+joinType+' (name) value (?)';

  // var mysql = require('mysql');
  // var v=mysql.format(sql, join_names);
  // console.log(v);

  conn.query(sql, joinNames, function(err) {
    if (err) {
      console.log(custumDate(), err);
      res.status(500).send('잘못 입력되었습니다.');
    } else {
      console.log(custumDate() + ' : ' + joinNames + ', Join! (MAC)');
      res.send(joinNames + '님이 성공적으로 입력되었습니다.');
    }
  });
};
