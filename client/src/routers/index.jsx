import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';
import PlanPage from './PlanPage';
const Router = () => {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/plan/:key" component={PlanPage} />
    </BrowserRouter>
  );
};

export default Router;
