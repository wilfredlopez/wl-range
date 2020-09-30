import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

interface Props {}

const Router = (props: Props) => {
  return (
    <React.Fragment>
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Router;
