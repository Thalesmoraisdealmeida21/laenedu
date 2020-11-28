import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SeeMore from '../pages/SeeMore';
import ViewContent from '../pages/ViewContent';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/seemore" exact component={SeeMore} />
      <Route path="/viewcontent" component={ViewContent} />
    </Switch>
  );
};

export default Routes;