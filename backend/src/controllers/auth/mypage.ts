import { custumDate } from '../../lib/getTime';
import { RequestHandler } from 'express';
import conn from '../../lib/databases';

export const mypage: RequestHandler = (req, res) => {
  const people_id = req.params.people_id;
  const status = req.params.status;
  const sql =
    'select m.name, l.check_id, DATE_FORMAT(l.in_time,"%Y%m%d%H%i%s") as in_time, DATE_FORMAT(l.in_time_edit,"%Y%m%d%H%i%s") as in_time_edit, l.in_co, DATE_FORMAT(l.out_time,"%Y%m%d%H%i%s") as out_time, DATE_FORMAT(l.out_time_edit,"%Y%m%d%H%i%s") as out_time_edit, l.out_co from mac_list as l, mac_member as m where m.people_id = l.people_id and m.people_id = ? and l.in_time > curdate() order by l.in_time asc';
  conn.query(sql, people_id, function(err, rows) {
    if (err) {
      console.log(custumDate(), err);
      res.status(500).send('Internal Server Error');
    } else if (rows[0]) {
      console.log('View Render! (MAC)');
      res.render('my', {
        rows: rows,
        people_id: people_id,
        status: status
      });
    } else {
      const err_msg = `
              <head>
              <script type="text/javascript">
                  alert("지금은 리스트를 만들 오늘 출석이 없습니다.\\n먼저 출석해주세요");
                  history.back();
              </script>
              </head>
          `;
      res.send(err_msg);
    }
  });
};
