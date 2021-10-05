import Home from '../pages/Home/Home';
import NotFound from '../pages/Home/404';
import Login from '../pages/Auth/Login/index';
import Signup from '../pages/Auth/Signup';
import ResetPass from '../pages/Auth/ResetPass';

import Posts from '../pages/Posts/index';
import Dashboard from '../pages/Dashboard/index';

const routes = [
  {
    path: '/login',
    component: Login,
    isPrivate: false,
  },
  {
    path: '/signup',
    component: Signup,
    isPrivate: false,
  },
  {
    path: '/resetpassword',
    component: ResetPass,
    isPrivate: false,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    isPrivate: true,
  },
  {
    path: '/posts',
    component: Posts,
    isPrivate: true,
  },
  {
    path: '/404',
    component: NotFound,
    isPrivate: false,
  },
  {
    path: '/',
    component: Home,
    isPrivate: false,
  }
];

export default routes;
