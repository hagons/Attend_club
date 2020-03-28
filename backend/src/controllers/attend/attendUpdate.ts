import { custumDate } from '../../lib/getTime';
import { RequestHandler } from 'express';
import conn from '../../lib/databases';

export const attendUpdate: RequestHandler = (req, res) => {
  const check_id = req.body.check_id;
  const people_id = req.body.people_id;
  const name = req.body.name;
  const ymd = req.body.ymd;

  const in_hour = req.body.in_hour;
  const in_min = req.body.in_min;
  const in_co = req.body.in_co;
  const out_hour = req.body.out_hour;
  const out_min = req.body.out_min;
  const out_co = req.body.out_co;
  const night = req.body.night;

  let hour;
  let min;
  let co;

  if (in_hour) {
    hour = in_hour;
    min = in_min;
    co = in_co;
  } else {
    hour = out_hour;
    min = out_min;
    co = out_co;
  }

  if (hour.length < 2) hour = '0' + hour;
  if (min.length < 2) min = '0' + min;
  const time = ymd + hour + min + '00';

  // var test = 'update mac_list set out_time_edit = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = ? ) as a ) where check_id = ?';
  let sql;

  if (in_hour) {
    sql = 'update mac_list set in_time_edit=?,in_co=? where check_id=?';
  } else {
    sql = 'update mac_list set out_time_edit=?,out_co=? where check_id=?';
  }

  if (night == 'on') {
    const time1 = ymd - 1 + '235959';
    const time1_1 =
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
    conn.query(sql1, [time1, time1_1, people_id], function(err, rows) {
      if (err) {
        console.log(custumDate(), err);
        res.status(500).send('Internal Server Error');
      } else if (rows.changedRows == 0) {
        const err_msg = `
          <head>
          <script type='text/javascript'>
              alert('전날 출석이 없습니다!\\n밤샘 체크할 수 없습니다');
              history.back();
          </script>
          </head>
        `;
        res.send(err_msg);
      } else {
        conn.query(sql2, [time2, people_id], function(err) {
          if (err) {
            console.log(custumDate(), err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log(custumDate(), name + ', Update data! (MAC)');
            res.redirect('/my/' + people_id + '/2');
          }
        });
      }
    });
  } else {
    conn.query(sql, [time, co, check_id], function(err) {
      if (err) {
        console.log(custumDate(), err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log(custumDate() + ' : ' + name + ', Update data! (MAC)');
        res.redirect('/my/' + people_id + '/2');
      }
    });
  }
};
