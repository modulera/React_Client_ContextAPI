// import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Layout from "./hoc/layout";
import routes from './config/routes';
import AppRoute from './components/AppRoutes';

function App() {
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
