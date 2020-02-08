import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/pages/shared/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/past">
          <div />
        </Route>
        <Route path="/present">
          <div />
        </Route>
        <Route path="/potencial">
          <div />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
