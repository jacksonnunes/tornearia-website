import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Service } from '../pages/Service';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/tornearia-website" component={Home} />
      <Route path="/services" component={Service} />
    </Switch>
  );
}