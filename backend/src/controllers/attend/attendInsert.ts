import { custumDate } from '../../lib/getTime';
import { RequestHandler } from 'express';
import conn from '../../lib/databases';

export const attendInsert: RequestHandler = (req, res) => {
  const people_id = req.body.people_id;
  const check_id = req.body.check_id;
  const name = req.body.name;
  const insert = 'insert into mac_list (people_id,in_time) value (?, now())';
  const update = 'update mac_list set out_time=now() where check_id=?';
  if (check_id) {
    conn.query(update, check_id, function(err) {
      if (err) {
        console.log(custumDate(), err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log(custumDate() + ' : ' + name + ', Insert Out Data! (MAC)');
        res.redirect('/my/' + people_id + '/1');
      }
    });
  } else {
    conn.query(insert, people_id, function(err) {
      if (err) {
        console.log(custumDate(), err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log(custumDate() + ' : ' + name + ', Insert In Data! (MAC)');
        res.redirect('/my/' + people_id + '/0');
      }
    });
  }
};
