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

  const authState = useAuthState()
  // const { isAuthenticated } = useAuthState()
  // console.log('App rendered isAuthenticated:', authState)

  useEffect(() => {
    console.log('useEffect trigger')

    if (!authState.isAuthenticated) {
      ; (async () => {
        console.log('fetchUser trigger')
        try {
          await checkAuthenticated(dispatch);
        } catch (err) {
          console.log(err)
        }
      })();
    }

  }, [authState.isAuthenticated, dispatch]);


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
