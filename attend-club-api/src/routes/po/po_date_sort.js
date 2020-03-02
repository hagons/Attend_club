module.exports = function (app) {
  var route = require('express').Router();
  var fs = require('fs');
  var conn = require('../db')();
  var getTime = require('../../lib/getTime');

  route.post('/graph', (req, res) => {
    var month = req.body.cur_month;
    var time = getTime.SQLMonth(month);
    var sql = 'select m.name, count(l.people_id) as count from po_list as l right outer join po_member as m on l.people_id = m.people_id and l.in_time like ? group by m.name order by count desc, l.in_time desc';
    conn.query(sql, time, function (err, rows, fields) {
      if (err) {
        console.log(getTime.Date(), err);
        res.status(500).send('Internal Server Error');
      } else if (rows[0]) {
        console.log('graph Render.');
        res.render('sort_include/graph', {
          rows: rows
        });
      } else {
        res.send('자료가 없습니다');
      }
    });
  });
  route.post('/row_data', (req, res) => {
    var month = req.body.cur_month;
    var time = getTime.SQLMonth(month);
    var sql = 'select l.check_id, m.name, DATE_FORMAT(l.in_time,"%Y%m%d%H%i%s") as in_time, dATE_FORMAT(l.in_time_edit,"%Y%m%d%H%i%s") as in_time_edit, l.in_co, DATE_FORMAT(l.out_time,"%Y%m%d%H%i%s") as out_time, DATE_FORMAT(l.out_time_edit,"%Y%m%d%H%i%s") as out_time_edit, l.out_co from po_list as l, po_member as m where m.people_id = l.people_id and l.in_time like ? order by l.in_time DESC,m.name';
    conn.query(sql, time, function (err, rows, fields) {
      if (err) {
        console.log(getTime.Date(), err);
        res.status(500).send('Internal Server Error');
      } else if (rows[0]) {
        console.log('Rowdata Render.');
        res.render('sort_include/row_data', {
          rows: rows
        });
      } else {
        res.send('자료가 없습니다!');
      }
    });
  });
  route.post('/not_today', (req, res) => {
    var sql = 'select name from po_member where people_id not in (select people_id from po_list where in_time>curdate() group by people_id)';
    conn.query(sql, function (err, rows, fields) {
      if (err) {
        console.log(getTime.Date(), err);
        res.status(500).send('Internal Server Error');
      } else if (rows[0]) {
        console.log('nottoday Render.');
        res.render('sort_include/not_today', {
          rows: rows
        });
      } else {
        res.send('전원 출석!');
      }
    });
  });
  route.post('/add_full_time', (req, res) => {
    var month = req.body.cur_month;
    var time = getTime.SQLMonth(month);
    var sql = 'select m.name, sum( if( ifnull( timestampdiff( second, ifnull( l.in_time_edit, l.in_time ), ifnull( ifnull( l.out_time_edit, l.out_time ), "0" ) ), "0")<0,0,ifnull( timestampdiff( second, ifnull( l.in_time_edit, l.in_time ), ifnull( ifnull( l.out_time_edit, l.out_time ), "0" ) ), "0") ) ) as sum from po_list as l, po_member as m where m.people_id = l.people_id and l.in_time like ? group by m.name order by sum desc, l.in_time desc';
    conn.query(sql, time, function (err, rows, fields) {
      if (err) {
        console.log(getTime.Date(), err);
        res.status(500).send('Internal Server Error');
      } else if (rows[0]) {
        console.log('add_full_time Render.');
        res.render('sort_include/add_full_time', {
          rows: rows
        });
      } else {
        res.send('자료가 없습니다!');
      }
    });
  });
  route.post('/excel', (req, res) => {
    var month = req.body.cur_month;
    var time = getTime.SQLMonth(month);
    var sand = getTime.Date();
    var file = '/users/home/web/dslr_pic/public/csv/po_' + month + '.csv';
    // var file = 'c:/git/dslr_pic/public/csv/'+sand+'.csv';
    var sql = 'SELECT m.name, l.in_time, l.in_time_edit, l.in_co, l.out_time, l.out_time_edit, l.out_co FROM po_list as l, po_member as m where l.people_id=m.people_id and l.in_time like ? into outfile ? CHARACTER SET euckr';
    fs.exists(file, function (exists) {
      if (exists) {
        res.send('/csv/po_' + month + '.csv');
        // }else if( !exists && Number(getTime.Date().slice(4,6)) > month ){
        //   res.send('이전 월만 출력할 수 있습니다!');
      } else {
        conn.query(sql, [time, file], function (err, rows, fields) {
          if (err) {
            console.log(getTime.Date(), err);
            res.status(500).send('Internal Server Error');
          } else {
            console.log(getTime.Date(), 'excel Render.');
            res.send('/csv/po_' + month + '.csv');
          }
        });
      }
    });
  });
  return route;
};