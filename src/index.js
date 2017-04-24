import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import TicketsPage from './pages/tickets-page';
import TicketPage from './pages/ticket-page';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const dashboard = (
  <div style={{height:'95vh'}}>
    <Route component={TicketsPage} path="/tickets" />
    <Route component={TicketPage} path="/ticket" />
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    {/* <Route component={App} to="/" /> */}
    {dashboard}
  </BrowserRouter>,
  document.getElementById('root')
);
