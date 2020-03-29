import { sqlMonth, custumDate } from '../lib';
import { RequestHandler } from 'express';
import fs from 'fs';
import conn from '../lib/databases';

export const excel: RequestHandler = (req, res) => {
  const month = req.body.cur_month;
  const time = sqlMonth(month);
  const file = '/users/home/web/dslr_pic/public/csv/' + month + '.csv';
  // var file = 'c:/git/dslr_pic/public/csv/'+sand+'.csv';
  const sql =
    'SELECT m.name, l.in_time, l.in_time_edit, l.in_co, l.out_time, l.out_time_edit, l.out_co FROM mac_list as l, mac_member as m where l.people_id=m.people_id and l.in_time like ? into outfile ? CHARACTER SET euckr';
  fs.exists(file, function(exists) {
    if (exists) {
      res.send('/csv/' + month + '.csv');
      // }else if( !exists && getTime.Date().slice(4,6) == month ){
      //   res.send('이전 월만 출력할 수 있습니다!');
    } else {
      conn.query(sql, [time, file], function(err) {
        if (err) {
          console.log(custumDate(), err);
          res.status(500).send('Internal Server Error');
        } else {
          console.log(custumDate(), 'Excel Render! (MAC)');
          res.send('/csv/' + month + '.csv');
        }
      });
    }
  });
};
