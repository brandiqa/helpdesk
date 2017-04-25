import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import App from './App';
import TicketsPage from './pages/tickets-page';
import TicketPage from './pages/ticket-page';
import authStore from './stores/auth-store';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

@observer
class Dashboard extends React.Component {

  privateRoutes = (
  <div>
    <Route component={TicketsPage} path="/dashboard/tickets" />
    <Route component={TicketPage} path="/dashboard/ticket" />
  </div>
  );

  render() {
    return (
      <div>
        { authStore.isAuthenticated ? this.privateRoutes : <Redirect to={{
            pathname:'/public/login',
            state:{from: this.props.location}
          }}
        />}
      </div>
    )
  }
}

const routes = (
  <div>
    <Route path="/public" component={App} />
    <Route path="/dashboard" component={Dashboard} />
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    {routes}
  </BrowserRouter>,
  document.getElementById('root')
);
