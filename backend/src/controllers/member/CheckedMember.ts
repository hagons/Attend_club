import { sqlMonth, custumDate } from '../../lib';
import { RequestHandler } from 'express';
import conn from '../../lib/databases';
export const checkedMember: RequestHandler = (req, res) => {
  const month = req.body.cur_month;
  const time = sqlMonth(month);
  const sql =
    'select l.check_id, m.name, DATE_FORMAT(l.in_time,"%Y%m%d%H%i%s") as in_time, dATE_FORMAT(l.in_time_edit,"%Y%m%d%H%i%s") as in_time_edit, l.in_co, DATE_FORMAT(l.out_time,"%Y%m%d%H%i%s") as out_time, DATE_FORMAT(l.out_time_edit,"%Y%m%d%H%i%s") as out_time_edit, l.out_co from mac_list as l, mac_member as m where m.people_id = l.people_id and l.in_time like ? order by l.in_time DESC,m.name';
  conn.query(sql, time, function(err, rows) {
    if (err) {
      console.log(custumDate(), err);
      res.status(500).send('Internal Server Error');
    } else if (rows[0]) {
      console.log('Rowdata Render! (MAC)');
      res.render('sort_include/row_data', {
        rows: rows
      });
    } else {
      res.send('자료가 없습니다!');
    }
  });
};
