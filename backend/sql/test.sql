select m.name, sum(
  if( ifnull( timestampdiff( second, ifnull( l.in_time_edit, l.in_time ), ifnull( ifnull( l.out_time_edit, l.out_time ), '0' ) ), '0')<0,0,ifnull( timestampdiff( second, ifnull( l.in_time_edit, l.in_time ), ifnull( ifnull( l.out_time_edit, l.out_time ), '0' ) ), '0') )
) as sum
from po_list as l, po_member as m
where m.people_id = l.people_id and l.in_time like '2016-06-%'
group by m.name
order by m.name;

select m.name, sum( if( ifnull( timestampdiff( second, ifnull( l.in_time_edit, l.in_time ), ifnull( ifnull( l.out_time_edit, l.out_time ), '0' ) ), '0')<0,0,ifnull( timestampdiff( second, ifnull( l.in_time_edit, l.in_time ), ifnull( ifnull( l.out_time_edit, l.out_time ), '0' ) ), '0') ) ) as sum from po_list as l, po_member as m where m.people_id = l.people_id and l.in_time like '2016-06-%' group by m.name order by m.name;

forever start -w -o ../app.log app.js
forever start -w -o ../po_app.log po_app.js
tail -f ../app.log

tail -f /Users/home/.forever/2umr.log /Users/home/.forever/4Or8.log

create table mac_member(
  people_id int(3) not null auto_increment,
  name char(20) not null,
  active int(3) default '1',
  PRIMARY key (people_id)
);

create table mac_list(
  people_id int(3) not null,
  check_id int(255) auto_increment,
  in_time datetime,
  in_time_edit datetime,
  in_co varchar(200),
  out_time datetime,
  out_time_edit datetime,
  out_co varchar(200),
  PRIMARY key (check_id),
  FOREIGN KEY (people_id) REFERENCES mem_list (people_id)
);

insert into mac_member (name) value ('조지민');
insert into mac_member (name) value ('배수은');
insert into mac_member (name) value ('서석준');
insert into mac_member (name) value ('김지호');
insert into mac_member (name) value ('제갈민정');
insert into mac_member (name) value ('안도영');
insert into mac_member (name) value ('황주희');
insert into mac_member (name) value ('이상호');
insert into mac_member (name) value ('김은영');
insert into mac_member (name) value ('김아름송이');
insert into mac_member (name) value ('오지현');
insert into mac_member (name) value ('홍성령');
insert into mac_member (name) value ('성은실');
insert into mac_member (name) value ('김선홍');
insert into mac_member (name) value ('박재병');
insert into mac_member (name) value ('정성훈');
insert into mac_member (name) value ('강경민');
insert into mac_member (name) value ('심지윤');
insert into mac_member (name) value ('정상민');
insert into mac_member (name) value ('장지솔');
insert into mac_member (name) value ('박명현');
insert into mac_member (name) value ('김은지');
insert into mac_member (name) value ('최은영');
insert into mac_member (name) value ('황준석');
insert into mac_member (name) value ('이효진');
insert into mac_member (name) value ('김지우');
insert into mac_member (name) value ('김성호');
insert into mac_member (name) value ('조혜인');
insert into mac_member (name) value ('김예안');
insert into mac_member (name) value ('윤아인');
insert into mac_member (name) value ('박세현');
insert into mac_member (name) value ('허지희');
insert into mac_member (name) value ('사공소현');
insert into mac_member (name) value ('정혜전');
insert into mac_member (name) value ('권나영');
insert into mac_member (name) value ('박경민');
insert into mac_member (name) value ('이동은');
insert into mac_member (name) value ('이하늘');
insert into mac_member (name) value ('신은영');

create table po_member(
  people_id int(3) not null auto_increment,
  name char(20) not null,
  active int(3) default '1',
  PRIMARY key (people_id)
);
create table po_list(
  people_id int(3) not null,
  check_id int(255) auto_increment,
  in_time datetime,
  in_time_edit datetime,
  in_co varchar(200),
  out_time datetime,
  out_time_edit datetime,
  out_co varchar(200),
  PRIMARY key (check_id),
  FOREIGN KEY (people_id) REFERENCES po_member (people_id)
);
insert into po_member (name) value ('고푸름');
insert into po_member (name) value ('김묘수');
insert into po_member (name) value ('김정은');
insert into po_member (name) value ('김정운');
insert into po_member (name) value ('박형진');
insert into po_member (name) value ('안지호');
insert into po_member (name) value ('임애형');
insert into po_member (name) value ('강구훈');
insert into po_member (name) value ('김민주');
insert into po_member (name) value ('권령');
insert into po_member (name) value ('박용우');
insert into po_member (name) value ('서민규');
insert into po_member (name) value ('손영경');
insert into po_member (name) value ('옥선지');
insert into po_member (name) value ('여정현');
insert into po_member (name) value ('이혜영');
insert into po_member (name) value ('제갈송이');
insert into po_member (name) value ('김은지');
insert into po_member (name) value ('김지영');
insert into po_member (name) value ('김혜진');
insert into po_member (name) value ('송수영');
insert into po_member (name) value ('이아현');
insert into po_member (name) value ('이은조');
insert into po_member (name) value ('최현지');
insert into po_member (name) value ('권동현');
insert into po_member (name) value ('류지원');
insert into po_member (name) value ('박은정');
insert into po_member (name) value ('박주현');
insert into po_member (name) value ('서양정');
insert into po_member (name) value ('정다휘');
insert into po_member (name) value ('홍계련');
insert into po_member (name) value ('황준하');
insert into po_member (name) value ('이수태');

select mem_list.name,round(count(mac_check.people_id)/2) as count from mac_check right outer join mem_list on mac_check.people_id = mem_list.people_id and mac_check.time_stemp like '2016-06-%' group by mem_list.people_id order by mem_list.people_id desc;

SELECT mem_list.name, mac_check.time_stemp, mac_check.edit_time FROM mac_check,mem_list where mac_check.people_id=mem_list.people_id into outfile '/users/home/web/dslr_pic/public/csv/day3.csv';
SELECT mem_list.name, mac_check.time_stemp, mac_check.edit_time FROM mac_check, mem_list where mac_check.people_id=mem_list.people_id and mac_check.time_stemp like '2016-05-%' into outfile 'c:/git/dslr_pic/public/csv/test.csv' CHARACTER SET euckr FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED BY '\\' LINES TERMINATED BY '\n';

update mac_check set edit_time="20?????00" where check_id=?
update mac_check set edit_time="20160523150000" where check_id=80

select mem_list.check_id, mem_list.name, DATE_FORMAT(mac_check.time_stemp,"%Y-%m-%d--%H:%i:%s") as time_stemp, DATE_FORMAT(mac_check.edit_time,"%Y-%m-%d--%H:%i:%s") as edit_time from mac_check, mem_list where mem_list.people_id = mac_check.people_id and mem_list.people_id = ?

select mem_list.name, DATE_FORMAT(mac_check.time_stemp,"%Y-%m-%d-%h-%m-%s") as time_stemp from mac_check, mem_list where mem_list.people_id = mac_check.people_id and mem_list.people_id = ?

select mem_list.name,round(count(mac_check.people_id)/2) as count from mac_check,mem_list where mac_check.people_id = mem_list.people_id group by mac_check.people_id;

select name from mem_list where people_id not in (select people_id from mac_check where time_stemp>curdate() group by people_id);

select mac_check.check_id, mem_list.name, DATE_FORMAT(mac_check.in_time,"%Y-%m-%d--%H:%i:%s") as in_time, dATE_FORMAT(mac_check.in_time_edit,"%Y-%m-%d--%H:%i:%s") as in_time_edit, mac_check.in_co, DATE_FORMAT(mac_check.out_time,"%Y-%m-%d--%H:%i:%s") as out_time, dATE_FORMAT(mac_check.out_time_edit,"%Y-%m-%d--%H:%i:%s") as out_time_edit, mac_check.out_co from mac_check, mem_list where mem_list.people_id = mac_check.people_id and mac_check.in_time like ? order by mac_check.in_time DESC,mem_list.name

-- 테이블 변경
select m.name, l.check_id, DATE_FORMAT(l.in_time,"%Y%m%d%H%i%s") as in_time, DATE_FORMAT(l.in_time_edit,"%Y%m%d%H%i%s") as in_time_edit, l.in_co from mac_list as l, mac_member as m where m.people_id = l.people_id and m.people_id = ? and l.in_time > curdate() order by l.in_time asc;
select m.name, count(l.people_id) as count from mac_list as l right outer join mac_member as m on l.people_id = m.people_id and l.in_time like ? group by m.name order by m.name;
SELECT m.name, l.in_time, l.in_time_edit, l.in_co, l.out_time, l.out_time_edit, l.out_co, FROM mac_list as l, mac_member as m where l.people_id=m.people_id and l.in_time like ? into outfile ? CHARACTER SET euckr;
select l.check_id, m.name, DATE_FORMAT(l.in_time,"%Y%m%d%H%i%s") as in_time, dATE_FORMAT(l.in_time_edit,"%Y%m%d%H%i%s") as in_time_edit, l.in_co, DATE_FORMAT(l.out_time,"%Y%m%d%H%i%s") as out_time, DATE_FORMAT(l.out_time_edit,"%Y%m%d%H%i%s") as out_time_edit, l.out_co from mac_list as l, mac_member as m where m.people_id = l.people_id and l.in_time like ? order by l.in_time DESC,m.name;

insert into mac_list (people_id,in_time) value ('8',now());

insert into mac_list (people_id,in_time) value ('8',20160501101510);
insert into mac_list (people_id,in_time) value ('8',20160502101510);
insert into mac_list (people_id,in_time) value ('8',20160503101510);
insert into mac_list (people_id,in_time) value ('8',20160504101510);
insert into mac_list (people_id,in_time) value ('8',20160505101510);
insert into mac_list (people_id,in_time) value ('8',20160506101510);
insert into mac_list (people_id,in_time) value ('8',20160507101510);
insert into mac_list (people_id,in_time) value ('8',20160508101510);
insert into mac_list (people_id,in_time) value ('8',20160509101510);
insert into mac_list (people_id,in_time) value ('8',20160510101510);
insert into mac_list (people_id,in_time) value ('8',20160511101510);
insert into mac_list (people_id,in_time) value ('8',20160512101510);
insert into mac_list (people_id,in_time) value ('8',20160513101510);
insert into mac_list (people_id,in_time) value ('8',20160514101510);
insert into mac_list (people_id,in_time) value ('8',20160515101510);
insert into mac_list (people_id,in_time) value ('8',20160516101510);
insert into mac_list (people_id,in_time) value ('8',20160517101510);
insert into mac_list (people_id,in_time) value ('8',20160518101510);
insert into mac_list (people_id,in_time) value ('8',20160519101510);
insert into mac_list (people_id,in_time) value ('8',20160520101510);
insert into mac_list (people_id,in_time) value ('8',20160521101510);
insert into mac_list (people_id,in_time) value ('8',20160522101510);
insert into mac_list (people_id,in_time) value ('8',20160523101510);
insert into mac_list (people_id,in_time) value ('8',20160524101510);
insert into mac_list (people_id,in_time) value ('8',20160525101510);
insert into mac_list (people_id,in_time) value ('8',20160526101510);

select m.people_id, m.name from mac_list as l join mac_member as m on m.people_id=l.people_id where l.in_time > curdate() and m.name = '이상호';

-- 데이터 베이스 수정
alter table mac_check change time_stemp in_time datetime;
alter table mac_check change edit_time in_time_edit datetime;
alter table mac_check change co in_co varchar(200);
alter table mac_check add out_time datetime;
alter table mac_check add out_time_edit datetime;
alter table mac_check add out_co varchar(200);
create database attendance;
rename table mac_check.mac_check to attendance.mac_list;
rename table mac_check.mem_list to attendance.mac_member;

alter table mac_member add active int(3);
update mac_member set active=1;

-- 사람 수정
update mac_list set out_time = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = 6 ) as a ) where check_id = 5;
delete from mac_list where check_id=6;
update mac_list set out_time = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = 9 ) as a ) where check_id = 8;
delete from mac_list where check_id=9;
update mac_list set out_time = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = 15 ) as a ) where check_id = 14;
delete from mac_list where check_id=15;
update mac_list set out_time = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = 18 ) as a ) where check_id = 17;
delete from mac_list where check_id=18;
update mac_list set out_time = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = 21 ) as a ) where check_id = 20;
delete from mac_list where check_id=21;
update mac_list set out_time = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = 23 ) as a ) where check_id = 22;
delete from mac_list where check_id=23;
update mac_list set out_time = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = 26 ) as a ) where check_id = 25;
delete from mac_list where check_id=26;
update mac_list set out_time = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = 31 ) as a ) where check_id = 30;
delete from mac_list where check_id=31;
update mac_list set out_time = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = 35 ) as a ) where check_id = 34;
delete from mac_list where check_id=35;

update mac_list set out_time = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = 19 ) as a ) where check_id = 12;
delete from mac_list where check_id=19;
update mac_list set out_time = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = 27 ) as a ) where check_id = 24;
delete from mac_list where check_id=27;
update mac_list set out_time = ( select * from ( SELECT in_time FROM mac_list WHERE check_id = 32 ) as a ) where check_id = 29;
delete from mac_list where check_id=32;
select * from mac_list;

delete from mac_member where people_id=40;
delete from mac_member where people_id=41;
delete from mac_member where people_id=42;
delete from mac_member where people_id=43;
delete from mac_member where people_id=44;
delete from mac_member where people_id=45;
delete from mac_member where people_id=46;
delete from mac_member where people_id=47;
delete from mac_member where people_id=48;
delete from mac_member where people_id=49;
delete from mac_member where people_id=50;
delete from mac_member where people_id=51;
delete from mac_member where people_id=52;
delete from mac_member where people_id=53;
