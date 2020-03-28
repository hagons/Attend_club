import Home from './views/Home';
import Login from './views/Login';
import Mypage from './views/Mypage';
import Signup from './views/Signup';
import Lists from './views/Lists';

export type routerType = Array<{
  path: string;
  component: React.FC<any>;
  exact: boolean;
}>;

export const router: routerType = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/@:user',
    component: Login,
    exact: false
  },
  {
    path: '/mypage/@:user',
    component: Mypage,
    exact: false
  },
  {
    path: '/signup',
    component: Signup,
    exact: false
  },
  {
    path: '/lists',
    component: Lists,
    exact: false
  }
];
