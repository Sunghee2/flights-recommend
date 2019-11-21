import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './HomePage';
import PlanPage from './PlanPage';
const Router = () => {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/plan/:key" component={PlanPage} />
      <Route component={() => <Redirect to="/" />} />
    </BrowserRouter>
  );
};

export default Router;
