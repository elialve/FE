import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound';
import HomePage from '../components/HomePage';

const AppRouter = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact="true"/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
