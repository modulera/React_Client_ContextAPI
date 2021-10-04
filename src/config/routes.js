import Login from '../pages/Login/index'
// import PageNotFound from '../pages/PageNotFound'
import Signup from '../pages/signup';
import Home from '../pages/Home';
import ResetPass from '../pages/ResetPass';

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
    path: '/',
    component: Home,
    isPrivate: false,
  }
];

export default routes;
