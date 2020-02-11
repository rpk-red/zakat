import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/pages/shared/Layout';
import Dashboard from './components/pages/dashboard/Dashboard';
import CardCreate from './components/pages/cardCreate/CardCreate';
import Profile from './components/pages/userProfile/Profile';
import TransactionHistory from './components/pages/transactionHistory/TransactionHistory';
import Home from './components/pages/home/Home';
import { PAGE_DASHBOARD, PAGE_CREATE_CARD, PAGE_CARD, PAGE_USER_PROFILE, PAGE_TRANSACTIONS_HISTORY, BASE } from './assets/constants/appConstants';


const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={`/${BASE}/${PAGE_CARD}`}>
          <Dashboard />
        </Route>
        <Route path={`/${BASE}/${PAGE_DASHBOARD}`}>
          <Dashboard />
        </Route>
        <Route path={`/${BASE}/${PAGE_CREATE_CARD}`}>
          <CardCreate />
        </Route>
        <Route path={`/${BASE}/${PAGE_USER_PROFILE}`}>
          <Profile />
        </Route>
        <Route path={`/${BASE}/${PAGE_TRANSACTIONS_HISTORY}`}>
          <TransactionHistory />
        </Route>
      </Switch>
      <Route exact path={`/${BASE}`}>
        <Home />
      </Route>
    </Layout >
  );
}

export default App;
