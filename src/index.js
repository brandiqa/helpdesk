import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import TicketsPage from './pages/tickets-page';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    {/* <Route component={App} to="/" /> */}
    <Route component={TicketsPage} to="/tickets" />
  </BrowserRouter>,
  document.getElementById('root')
);
