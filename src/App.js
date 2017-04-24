import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Menu,Icon } from 'semantic-ui-react';
import HomePage from './pages/home-page';
import SubmitTicketPage from './pages/submit-ticket-page';
import LoginPage from './pages/login-page';

class App extends Component {
  render() {
    return (
      <div>
        <Menu pointing>
          <Menu.Item header><Icon name='bug' /> HelpDesk</Menu.Item>
          <NavLink className="item blue" activeClassName="active" exact to="/">
            <Icon name='home' /> Home
          </NavLink>
          <NavLink className="item blue" activeClassName="active" to="/login">
            <Icon name='user' /> Login
          </NavLink>
          <NavLink className="item blue" activeClassName="active" to="/submit">
            <Icon name='ticket' /> Submit Ticket
          </NavLink>
        </Menu>
        <Route exact path="/" component={HomePage} />
        <Route path="/submit" component={SubmitTicketPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    )
  }
}

export default App;
