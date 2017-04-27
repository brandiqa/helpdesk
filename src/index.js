import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { routes }  from './config/routes';
import App from './App';
import Dashboard from './Dashboard';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path={routes.app} component={App} />
        <Route path={routes.dashboard} component={Dashboard} />
        <Redirect from="/" to={routes.app} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
