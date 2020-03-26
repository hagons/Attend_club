import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import DevelopmentNote from './views/DevelopmentNote';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dev" component={DevelopmentNote} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
