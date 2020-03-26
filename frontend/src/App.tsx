import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
