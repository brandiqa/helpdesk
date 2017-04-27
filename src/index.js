import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { routes }  from './config/routes';
import App from './App';
import Dashboard from './Dashboard';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path={routes.app} component={App} />
      <Redirect from="/" to={routes.app} />
      <Route path={routes.dashboard} component={Dashboard} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
