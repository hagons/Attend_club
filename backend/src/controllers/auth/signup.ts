import { custumDate } from '../../lib/getTime';
import { RequestHandler } from 'express';
import conn from '../../lib/databases';

export const signup: RequestHandler = (req, res) => {
  const { joinName, joinType } = req.body;
  const sql = 'insert into mac_member (name) value (?)';
  conn.query(sql, joinName, err => {
    if (err) {
      console.log(custumDate(), err);
      res.status(500).send('잘못 입력되었습니다.');
    } else {
      console.log(custumDate() + ' : ' + joinName + ', Join! (MAC)');
      res.send(joinName + '님이 성공적으로 입력되었습니다.');
    }
  });
};
