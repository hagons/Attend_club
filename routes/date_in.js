module.exports = function (app, urlencode) {
  var route = require('express').Router();
  var urlencode = require('urlencode');
  var conn = require('./db')();
  var getTime = require('../lib/getTime');

  route.post('/insert', (req, res) => {
    var people_id = req.body.people_id;
    var check_id = req.body.check_id;
    var name = req.body.name;
    var insert = 'insert into mac_list (people_id,in_time) value (?, now())';
    var update = 'update mac_list set out_time=now() where check_id=?';
    if (check_id) {
      conn.query(update, check_id, function (err, rows, fields) {
        if (err) {
          console.log(getTime.Date(), err);
          res.status(500).send('Internal Server Error');
        } else {
          console.log(getTime.Date() + ' : ' + name + ', Insert Out Data! (MAC)');
          res.redirect('/my/' + people_id + '/1');
        }
      });
    } else {
      conn.query(insert, people_id, function (err, rows, fields) {
        if (err) {
          console.log(getTime.Date(), err);
          res.status(500).send('Internal Server Error');
        } else {
          console.log(getTime.Date() + ' : ' + name + ', Insert In Data! (MAC)');
          res.redirect('/my/' + people_id + '/0');
        }
      });
    }
  });
  route.post('/update', (req, res) => {
    var check_id = req.body.check_id;
    var people_id = req.body.people_id;
    var name = req.body.name;
    var ymd = req.body.ymd;

    var in_hour = req.body.in_hour;
    var in_min = req.body.in_min;
    var in_co = req.body.in_co;
    var out_hour = req.body.out_hour;
    var out_min = req.body.out_min;
    var out_co = req.body.out_co;
    var night = req.body.night;

    var hour;
    var min;
    var co;

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
    var time = ymd + hour + min + '00';

    // var test = 'update mac_list set out_time_edit = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = ? ) as a ) where check_id = ?';
    var sql;

    if (in_hour) {
      sql = 'update mac_list set in_time_edit=?,in_co=? where check_id=?';
    } else {
      sql = 'update mac_list set out_time_edit=?,out_co=? where check_id=?';
    }

    if (night == 'on') {
      var time1 = (ymd - 1) + '235959';
      var time1_1 = ymd.slice(0, 4) + '-' + ymd.slice(4, 6) + '-' + (Number(ymd.slice(6, 8)) - 1) + '%';
      var time2 = ymd + '000001';
      var sql1 = 'update mac_list set out_time_edit=?,out_co="밤샘" where in_time like ? and people_id=?';
      var sql2 = 'update mac_list set in_time_edit=?,in_co="밤샘" where in_time>curdate() and people_id=?';
      conn.query(sql1, [time1, time1_1, people_id], function (err, rows) {
        if (err) {
          console.log(getTime.Date(), err);
          res.status(500).send('Internal Server Error');
        } else if (rows.changedRows == 0) {
          var err_msg = `
            <head>
            <script type='text/javascript'>
                alert('전날 출석이 없습니다!\\n밤샘 체크할 수 없습니다');
                history.back();
            </script>
            </head>
          `;
          res.send(err_msg);
        } else {
          conn.query(sql2, [time2, people_id], function (err) {
            if (err) {
              console.log(getTime.Date(), err);
              res.status(500).send('Internal Server Error');
            } else {
              console.log(getTime.Date(), name + ', Update data! (MAC)');
              res.redirect('/my/' + people_id + '/2');
            }
          });
        }
      });
    } else {
      conn.query(sql, [time, co, check_id], function (err, rows, fields) {
        if (err) {
          console.log(getTime.Date(), err);
          res.status(500).send('Internal Server Error');
        } else {
          console.log(getTime.Date() + ' : ' + name + ', Update data! (MAC)');
          res.redirect('/my/' + people_id + '/2');
        }
      });
    };
  });
  route.get('/join', function (req, res) {
    res.render('join');
  });
  route.post('/join', function (req, res) {
    var join_type = req.body.join_type;
    var join_names = urlencode.decode(req.body.join_names);
    // if(join_type=='po'){
    //   join_type = 'po_member'
    // }else{
    //   join_type = 'mac_member'
    // };
    var sql = 'insert into mac_member (name) value (?)';
    // var sql = 'insert into '+join_type+' (name) value (?)';

    // var mysql = require('mysql');
    // var v=mysql.format(sql, join_names);
    // console.log(v);

    conn.query(sql, join_names, function (err, rows) {
      if (err) {
        console.log(getTime.Date(), err);
        res.status(500).send('잘못 입력되었습니다.');
      } else {
        console.log(getTime.Date() + ' : ' + join_names + ', Join! (MAC)');
        res.send(join_names + '님이 성공적으로 입력되었습니다.');
      }
    });
  });

  return route;
};