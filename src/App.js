import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Menu, Icon, Segment, Header } from 'semantic-ui-react';
import HomePage from './pages/home-page';
import SubmitTicketPage from './pages/submit-ticket-page';
import LoginPage from './pages/login-page';
import { brand } from './styles';
const logo = 'laptop';

class App extends Component {

  render() {
    const item = "item " + brand;
    return (
      <div>
        <Menu pointing style={{marginBottom:'0'}}>
          <Menu.Item header><Icon name={logo} /> HelpDesk</Menu.Item>
          <NavLink className={item} activeClassName="active" to="/public" exact>
            <Icon name='home' /> Home
          </NavLink>
          <NavLink className={item} activeClassName="active" to="/public/login">
            <Icon name='user' /> Login
          </NavLink>
          <NavLink className={item} activeClassName="active" to="/public/submit">
            <Icon name='ticket' /> Submit Ticket
          </NavLink>
        </Menu>
        <Segment color={brand} style={{marginTop: 0}} inverted>
          <Header as='h2' icon textAlign='center' size='huge'>
            <Icon name={logo} />
            <Header.Content>
              Help Desk
            </Header.Content>
            <Header.Subheader style={{color:'white'}}>
              User Support and Ticketing Software
            </Header.Subheader>
          </Header>
        </Segment>
        <Route path="/public" component={HomePage} exact/>
        <Route path="/public/submit" component={SubmitTicketPage} />
        <Route path="/public/login" component={LoginPage} />
      </div>
    )
  }
}

export default App;
