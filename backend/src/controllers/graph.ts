import { sqlMonth, custumDate } from './../lib/getTime';
import { RequestHandler } from 'express';
import conn from '../lib/databases';
export const graph: RequestHandler = (req, res) => {
  const month = req.body.cur_month;
  const time = sqlMonth(month);
  const sql =
    'select m.name, count(l.people_id) as count from mac_list as l right outer join mac_member as m on l.people_id = m.people_id and l.in_time like ? where active=1 group by m.name order by count desc, l.in_time desc';
  conn.query(sql, time, function(err, rows) {
    if (err) {
      console.log(custumDate(), err);
      res.status(500).send('Internal Server Error');
    } else if (rows[0]) {
      console.log('Graph Render! (MAC)');
      res.render('sort_include/graph', {
        rows: rows
      });
    } else {
      res.send('자료가 없습니다');
    }
  });
};
