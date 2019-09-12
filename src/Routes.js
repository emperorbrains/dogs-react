import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './scenes/Home';

import NotFound from './scenes/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
