import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/App.scss';
import { router } from './router';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {router.map((route, index) => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={index}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
