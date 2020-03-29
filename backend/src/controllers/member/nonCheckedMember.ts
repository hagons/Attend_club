import { custumDate } from '../../lib';
import { RequestHandler } from 'express';
import conn from '../../lib/databases';

export const nonCheckedMember: RequestHandler = (req, res) => {
  const sql =
    'select name from mac_member where people_id not in (select people_id from mac_list where in_time>curdate() group by people_id) and active=1';
  conn.query(sql, function(err, rows) {
    if (err) {
      console.log(custumDate(), err);
      res.status(500).send('Internal Server Error');
    } else if (rows[0]) {
      console.log('Not_today Render! (MAC)');
      res.render('sort_include/not_today', {
        rows: rows
      });
    } else {
      res.send('전원 출석!');
    }
  });
};
