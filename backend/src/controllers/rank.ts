import { sqlMonth, custumDate } from '../lib';
import { RequestHandler } from 'express';
import conn from '../lib/databases';

export const rank: RequestHandler = (req, res) => {
  const month = req.body.cur_month;
  const time = sqlMonth(month);
  const sql =
    'select m.name, sum( if( ifnull( timestampdiff( second, ifnull( l.in_time_edit, l.in_time ), ifnull( ifnull( l.out_time_edit, l.out_time ), "0" ) ), "0")<0,0,ifnull( timestampdiff( second, ifnull( l.in_time_edit, l.in_time ), ifnull( ifnull( l.out_time_edit, l.out_time ), "0" ) ), "0") ) ) as sum from mac_list as l, mac_member as m where m.people_id = l.people_id and l.in_time like ? group by m.name order by sum desc, l.in_time desc';
  conn.query(sql, time, function(err, rows) {
    if (err) {
      console.log(custumDate(), err);
      res.status(500).send('Internal Server Error');
    } else if (rows[0]) {
      console.log('Add Full Time Render. (MAC)');
      res.render('sort_include/add_full_time', {
        rows: rows
      });
    } else {
      res.send('자료가 없습니다!');
    }
  });
};
