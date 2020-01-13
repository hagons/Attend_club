var app = require('./routes/express')();
var att = require('./routes/express')();
var getTime = require('./lib/getTime');

var routes = require('./routes/po/po_route')(att);
att.use('/po/', routes);
var date_sort = require('./routes/po/po_date_sort')(att);
att.use('/po/', date_sort);
var date_in = require('./routes/po/po_date_in')(att);
att.use('/po/', date_in);

var date_in = require('./routes/date_in')(att);
att.use('/', date_in);
var date_sort = require('./routes/date_sort')(att);
att.use('/', date_sort);
var routes = require('./routes/route')(att);
att.use('/', routes);

att.listen(8080, ()=>{
  console.log(getTime.Date(),'Server Start! 8080');
});

app.get('/', function(req,res){
  console.log(getTime.Date(),'User Rending 80 port site!');
  res.send(`
    <div style="font-size:5em">
      <ul>
        <li>MAC : <a href="http://mac2312.ga">http://mac2312.ga</a></li>
        <li>PO : <a href="http://po2308.ga">http://po2308.ga</a></li>
      </ul>
      <br/>주소 바꿈요
    </div>
  `);
});

app.listen(80, ()=>{
  console.log(getTime.Date(),'Server Start! 80');
});
