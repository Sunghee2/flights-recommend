import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Home} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route component={() => <Redirect to="/" />} />
    </BrowserRouter>
  );
};

export default Router;
