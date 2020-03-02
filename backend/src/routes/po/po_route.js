module.exports = function (app) {
  var route = require('express').Router();
  var urlencode = require('urlencode');
  var conn = require('../db')();
  var getTime = require('../../lib/getTime');

  route.get('/', (req, res) => {
    res.render('po/po_index');
  });
  route.get('/dev', (req, res) => {
    res.render('dev');
  });
  route.get(['/sort', '/sort/:name', '/sort/:name/:excel'], (req, res) => {
    var name = urlencode.decode(req.params.name);
    var excel = urlencode.decode(req.params.excel);
    res.render('po/po_sort', {
      name: name,
      excel: excel
    });
  });

  route.get('/:name', (req, res) => {
    var name = urlencode.decode(req.params.name);
    var isexist = 'select people_id from po_member where name=?';
    var counting = 'select check_id, out_time from po_list where in_time > curdate() and ?';
    conn.query(isexist, name, function (err, people_id) {
      if (err) {
        console.log(getTime.Date(), err);
        res.status(500).send('Internal Server Error');
      } else if (people_id[0]) {
        conn.query(counting, people_id[0], function (err, rows) {
          if (err) {
            console.log(getTime.Date(), err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log('Login Render.');
            if (rows[0] == null) {
              rows = [{
                out_time: 0
              }];
            };
            res.render('po/po_login', {
              rows: rows,
              name: name,
              people_id: people_id[0].people_id
            });
          }
        });
      } else {
        var err_msg = `
          <head>
          <script type="text/javascript">
              alert("포 회원이 아닙니다.\\n또는 정확히 이름을 입력해주세요.");
              history.back();
          </script>
          </head>
        `;
        res.send(err_msg);
      }
    });
  });
  route.get(['/my/:people_id', '/my/:people_id/:status'], (req, res) => {
    var people_id = req.params.people_id;
    var status = req.params.status;
    var sql = 'select m.name, l.check_id, DATE_FORMAT(l.in_time,"%Y%m%d%H%i%s") as in_time, DATE_FORMAT(l.in_time_edit,"%Y%m%d%H%i%s") as in_time_edit, l.in_co, DATE_FORMAT(l.out_time,"%Y%m%d%H%i%s") as out_time, DATE_FORMAT(l.out_time_edit,"%Y%m%d%H%i%s") as out_time_edit, l.out_co from po_list as l, po_member as m where m.people_id = l.people_id and m.people_id = ? and l.in_time > curdate() order by l.in_time asc';
    conn.query(sql, people_id, function (err, rows, fields) {
      if (err) {
        console.log(getTime.Date(), err);
        res.status(500).send('Internal Server Error');
      } else if (rows[0]) {
        console.log('View Render.');
        res.render('po/po_my', {
          rows: rows,
          people_id: people_id,
          status: status
        });
      } else {
        var err_msg = `
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
  });

  return route;
};