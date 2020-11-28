import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SeeMore from '../pages/SeeMore';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/seemore" exact component={SeeMore} />
    </Switch>
  );
};

export default Routes;