import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFount from '../containers/NotFount';

const serverRoutes = (isLogged) => {
  return [
    {
      path: '/',
      exact: true,
      component: isLogged ? Home : Login,
    },
    
    {
      path: '/login',
      exact: true,
      component: Login,
    },
    {
      path: '/register',
      exact: true,
      component: Register,
    },
    {
      name: 'NotFount',
      component: NotFount,
    },
  ]
}

export default serverRoutes;
