import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { responsiveFontSizes } from '@material-ui/core/styles';

import ThemeProvider from '@material-ui/styles/ThemeProvider';

import { ToastContainer, toast } from 'react-toastify';
import routerController from './GlobalFunction/routerController';
import routes from './routes';
import theme from './styles/theme';

import 'react-toastify/dist/ReactToastify.css';

const themeResposive = responsiveFontSizes(theme, { factor: 6, breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'] });

/*
// service worker - WPA5
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
*/

ReactDOM.render(
  <ThemeProvider theme={themeResposive}>
    <ToastContainer />
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        {routerController(routes)}
        <Redirect exact from="/" to="/home" />
        <Route component={routes[0].component} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
