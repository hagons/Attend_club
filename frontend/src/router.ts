import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Mypage from './views/Mypage';
import Signup from './views/Signup';
import Lists from './views/Lists';
import NotFound from './views/NotFound';

export type routerType = Array<{
  path: string;
  component: React.FC<any>;
  exact: boolean;
}>;

export const router: routerType = [
  {
    path: '/',
    component: Login,
    exact: true
  },
  {
    path: '/@:user',
    component: Dashboard,
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
  },
  {
    path: '*',
    component: NotFound,
    exact: true
  }
];
