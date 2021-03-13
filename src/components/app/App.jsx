import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import SplashPage from '../../containers/SplashPage';
import TopDrawer from '../drawer/TopDrawer';

export default function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Roboto Mono',
    },
    palette: {
      primary: {
        light: '#E65215',
        main: '#d62828',
        dark: '#6F2C38',
      },
      secondary: {
        light: '#F5CD75',
        main: '#FCBF49',
        dark: '#FAA026',
      }
    }
  });

  return (
    <Router>
      <ThemeProvider theme={theme} >
        <Switch>
          <Route exact path="/" component={TopDrawer}/>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

