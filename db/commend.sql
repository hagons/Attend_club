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
