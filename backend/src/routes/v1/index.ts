import { checkedMember } from './../../controllers/member/CheckedMember';
import { nonCheckedMember } from './../../controllers/member/nonCheckedMember';
import { graph } from './../../controllers/graph';
import { rank } from './../../controllers/rank';
import { attendUpdate } from '../../controllers/attend/attendUpdate';
import { attendInsert } from '../../controllers/attend/attendInsert';
import { signup } from '../../controllers/auth/signup';
import { mypage } from '../../controllers/auth/mypage';
import { name } from '../../controllers/auth/name';
import { lists } from '../../controllers/auth/lists';
import { Router as router } from 'express';

const route = router();

route.post('/signup', signup);
route.post('/insert', attendInsert);
route.post('/update', attendUpdate);

route.get(['/lists', '/lists/:name', '/lists/:name/:excel'], lists);
route.get(['/mypage/:people_id', '/mypage/:people_id/:status'], mypage);
route.get('/name', name);
route.get('/rank', rank);
route.get('/graph', graph);
route.get('/checked', nonCheckedMember);
route.get('/nonchecked', checkedMember);

export default route;
