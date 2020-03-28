import { custumDate } from '../../lib/getTime';
import { RequestHandler } from 'express';
import urlencode from 'urlencode';
import conn from '../../lib/databases';

export const name: RequestHandler = (req, res) => {
  const name = urlencode.decode(req.params.name);
  const isexist = 'select people_id from mac_member where name=?';
  const counting =
    'select check_id, out_time from mac_list where in_time > curdate() and ?';
  conn.query(isexist, name, function(err, people_id) {
    if (err) {
      console.log(custumDate(), err);
      res.status(500).send('Internal Server Error');
    } else if (people_id[0]) {
      conn.query(counting, people_id[0], function(err, rows) {
        if (err) {
          console.log(custumDate(), err);
          res.status(500).send('Internal Server Error');
        } else {
          console.log('Login Render! (MAC)');
          if (rows[0] == null) {
            rows = [
              {
                out_time: 0
              }
            ];
          }
          res.render('login', {
            rows: rows,
            name: name,
            people_id: people_id[0].people_id
          });
        }
      });
    } else {
      const err_msg = `
          <head>
          <script type="text/javascript">
              alert("맥 회원이 아닙니다.\\n또는 정확히 이름을 입력해주세요.");
              history.back();
          </script>
          </head>
        `;
      res.send(err_msg);
    }
  });
};
