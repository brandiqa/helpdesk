import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import TicketsPage from './pages/tickets-page';
import TicketPage from './pages/ticket-page';
import authStore from './stores/auth-store';
import { routes } from './config/routes';

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
            pathname: routes.login,
            state:{from: this.props.location}
          }}
        />}
      </div>
    )
  }
}

export default Dashboard;
