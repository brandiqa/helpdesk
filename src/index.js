import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import App from './App';
import Dashboard from './Dashboard';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/app" component={App} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
