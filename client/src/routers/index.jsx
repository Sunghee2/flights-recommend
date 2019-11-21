import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Plan from './Plan';
const Router = () => {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Home} />
      <Route path="/plan/:key" component={Plan} />
      <Route component={() => <Redirect to="/" />} />
    </BrowserRouter>
  );
};

export default Router;
