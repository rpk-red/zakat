import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/pages/shared/Layout';
import Dashboard from './components/pages/dashboard/Dashboard';
import { PAGE_DASHBOARD, PAGE_CARD, PAGE_USER_PROFILE } from './assets/constants/appConstants';
import CardCreate from './components/pages/cardCreate/CardCreate';
import Profile from './components/pages/userProfile/Profile';


const App = () => {
  return (
    <Layout>
      <Switch>
      <Route exact path="/zakat">
          <Dashboard />
        </Route>
        <Route path={`/zakat/${PAGE_DASHBOARD}`}>
          <Dashboard />
        </Route>
        <Route path={`/zakat/${PAGE_CARD}`}>
          <CardCreate />
        </Route>
        <Route path={`/zakat/${PAGE_USER_PROFILE}`}>
          <Profile />
        </Route>
      </Switch>
    </Layout >
  );
}

export default App;
