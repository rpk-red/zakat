import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/pages/shared/Layout';
import Dashboard from './components/pages/dashboard/Dashboard';
import { PAGE_DASHBOARD } from './assets/constants/appConstants';


const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={`/${PAGE_DASHBOARD}`}>
          <Dashboard />
        </Route>
        <Route path="/present">
          <div />
        </Route>
        <Route path="/potencial">
          <div />
        </Route>
      </Switch>
    </Layout >
  );
}

export default App;
