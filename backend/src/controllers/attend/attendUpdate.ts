import { custumDate } from '../../lib/getTime';
import { RequestHandler } from 'express';
import conn from '../../lib/databases';

export const attendUpdate: RequestHandler = (req, res) => {
  const { checkId, peopleId, name, ymd } = req.body;
  const { inHour, inMin, inCo, outHour, outMin, outCo, night } = req.body;

  let hour;
  let min;
  let co;

  if (inHour) {
    hour = inHour;
    min = inMin;
    co = inCo;
  } else {
    hour = outHour;
    min = outMin;
    co = outCo;
  }

  if (hour.length < 2) hour = '0' + hour;
  if (min.length < 2) min = '0' + min;
  const time = ymd + hour + min + '00';

  // var test = 'update mac_list set out_time_edit = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = ? ) as a ) where check_id = ?';
  let sql;

  if (inHour) {
    sql = 'update mac_list set in_time_edit=?,in_co=? where check_id=?';
  } else {
    sql = 'update mac_list set out_time_edit=?,out_co=? where check_id=?';
  }

  if (night == 'on') {
    const time1 = ymd - 1 + '235959';
    const time11 =
      ymd.slice(0, 4) +
      '-' +
      ymd.slice(4, 6) +
      '-' +
      (Number(ymd.slice(6, 8)) - 1) +
      '%';
    const time2 = ymd + '000001';
    const sql1 =
      'update mac_list set out_time_edit=?,out_co="밤샘" where in_time like ? and people_id=?';
    const sql2 =
      'update mac_list set in_time_edit=?,in_co="밤샘" where in_time>curdate() and people_id=?';
    conn.query(sql1, [time1, time11, peopleId], function(err, rows) {
      if (err) {
        console.log(custumDate(), err);
        res.status(500).send('Internal Server Error');
      } else if (rows.changedRows == 0) {
        const msg = `
          <head>
          <script type='text/javascript'>
              alert('전날 출석이 없습니다!\\n밤샘 체크할 수 없습니다');
              history.back();
          </script>
          </head>
        `;
        res.send(msg);
      } else {
        conn.query(sql2, [time2, peopleId], function(err) {
          if (err) {
            console.log(custumDate(), err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log(custumDate(), name + ', Update data! (MAC)');
            res.redirect('/my/' + peopleId + '/2');
          }
        });
      }
    });
  } else {
    conn.query(sql, [time, co, checkId], function(err) {
      if (err) {
        console.log(custumDate(), err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log(custumDate() + ' : ' + name + ', Update data! (MAC)');
        res.redirect('/my/' + peopleId + '/2');
      }
    });
  }
};
