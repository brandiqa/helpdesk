import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Menu, Icon, Segment, Header } from 'semantic-ui-react';
import HomePage from './pages/home-page';
import SubmitTicketPage from './pages/submit-ticket-page';
import LoginPage from './pages/login-page';

const brand = "teal";

class App extends Component {

  bannerStyle = {
    height:"30vh",
    paddingTop: "6vh",
  }

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
        <Segment color={brand} style={this.bannerStyle} inverted>
          <Header as='h2' icon textAlign='center'>
            <Icon name='anchor' circular/>
            <Header.Content>
              Help Desk
            </Header.Content>
          </Header>
        </Segment>
        <Route exact path="/" component={HomePage} />
        <Route path="/submit" component={SubmitTicketPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    )
  }
}

export default App;
