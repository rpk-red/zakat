import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/pages/shared/Layout';
import Dashboard from './components/pages/dashboard/Dashboard';
import { PAGE_DASHBOARD, PAGE_CARD, PAGE_USER_PROFILE, BASE } from './assets/constants/appConstants';
import CardCreate from './components/pages/cardCreate/CardCreate';
import Profile from './components/pages/userProfile/Profile';


const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={`/${BASE}`}>
          <Dashboard />
        </Route>
        <Route path={`/${BASE}/${PAGE_DASHBOARD}`}>
          <Dashboard />
        </Route>
        <Route path={`/${BASE}/${PAGE_CARD}`}>
          <CardCreate />
        </Route>
        <Route path={`/${BASE}/${PAGE_USER_PROFILE}`}>
          <Profile />
        </Route>
      </Switch>
    </Layout >
  );
}

export default App;
