import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch } from 'react-router-dom';
import SplashPage from '../../containers/SplashPage';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SplashPage}/>
      </Switch>
    </Router>
  );
}

