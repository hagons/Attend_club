import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import DevelopmentNote from './views/DevelopmentNote';
import './App.scss';
import Login from './views/Login';
import Mypage from './views/Mypage';
import Signup from './views/Signup';
import Lists from './views/Lists';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dev" component={DevelopmentNote} />
        <Route path="/@:user" component={Login} />
        <Route path="/mypage/@:user" component={Mypage} />
        <Route path="/signup" component={Signup} />
        <Route path="/lists" component={Lists} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
