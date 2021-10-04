import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Layout from "./hoc/layout";
import routes from './config/routes';
import AppRoute from './components/AppRoutes';

import { checkAuthenticated, useAuthState, useAuthDispatch } from './context';

function App() {
  const dispatch = useAuthDispatch()
  const { isAuthenticated } = useAuthState()

  // const authState = useAuthState()
  // console.log('User isAuthenticated:', authState)
  console.log('App rendered isAuthenticated:', isAuthenticated)

  const fetchUser = async () => {
    console.log('fetchUser trigger')
    try {
      await checkAuthenticated(dispatch);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    console.log('useEffect trigger')
    if (!isAuthenticated) fetchUser()
  }, [isAuthenticated]);


  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((route) => (
            <AppRoute
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
