import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/App.scss';
import { router } from './router';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {router.map(r => (
          <Route path={r.path} component={r.component} exact={r.exact} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
