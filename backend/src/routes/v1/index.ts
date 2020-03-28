import { checkedMember } from './../../controllers/member/CheckedMember';
import { nonCheckedMember } from './../../controllers/member/nonCheckedMember';
import { graph } from './../../controllers/graph';
import { rank } from './../../controllers/rank';
import { attendUpdate } from '../../controllers/attend/attendUpdate';
import { attendInsert } from '../../controllers/attend/attendInsert';
import { signup } from '../../controllers/auth/signup';
import { mypage } from '../../controllers/auth/mypage';
import { name } from '../../controllers/auth/name';
import { dev } from './../../controllers/dev';
import { lists } from '../../controllers/auth/lists';
import { Router as router } from 'express';

const route = router();

route.get('/signup', signup);
route.get('/insert', attendInsert);
route.get('/update', attendUpdate);
route.get('/dev', dev);
route.get(['/lists', '/lists/:name', '/lists/:name/:excel'], lists);
route.get('/name', name);
route.get(['/my/:people_id', '/my/:people_id/:status'], mypage);
route.get('/rank', rank);
route.get('/graph', graph);
route.get('/checked', nonCheckedMember);
route.get('/nonchecked', checkedMember);

export default route;
