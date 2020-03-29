import { custumDate } from '../../lib/getTime';
import { RequestHandler } from 'express';
import conn from '../../lib/databases';

export const name: RequestHandler = (req, res) => {
  const name = req.params.name;
  const isexist = 'select people_id from mac_member where name=?';
  const counting =
    'select check_id, out_time from mac_list where in_time > curdate() and ?';
  conn.query(isexist, name, function(err, peopleId) {
    if (err) {
      console.log(custumDate(), err);
      res.status(500).send('Internal Server Error');
    } else if (peopleId[0]) {
      conn.query(counting, peopleId[0], function(err, rows) {
        if (err) {
          console.log(custumDate(), err);
          res.status(500).send('Internal Server Error');
        } else {
          console.log('Login Render! (MAC)');
          if (rows[0] == null) {
            rows = [
              {
                outTime: 0
              }
            ];
          }
          res.render('login', {
            rows: rows,
            name: name,
            peopleId: peopleId[0].peopleId
          });
        }
      });
    } else {
      const msg = `
          <head>
          <script type="text/javascript">
              alert("맥 회원이 아닙니다.\\n또는 정확히 이름을 입력해주세요.");
              history.back();
          </script>
          </head>
        `;
      res.send(msg);
    }
  });
};
