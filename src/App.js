import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Menu, Icon, Segment, Header } from 'semantic-ui-react';
import HomePage from './pages/home-page';
import SubmitTicketPage from './pages/submit-ticket-page';
import LoginPage from './pages/login-page';
import { brand } from './styles';
import { routes }  from './config/routes';
const logo = 'laptop';

class App extends Component {

  render() {
    const item = "item " + brand;
    return (
      <div>
        {/* Primary Menu */}
        <Menu pointing stackable style={{marginBottom:'0'}}>
          <Menu.Item header><Icon name={logo} /> HelpDesk</Menu.Item>
          <NavLink className={item} activeClassName="active" to={routes.home} exact>
            <Icon name='home' /> Home
          </NavLink>
          <NavLink className={item} activeClassName="active" to={routes.login}>
            <Icon name='user' /> Login
          </NavLink>
          <NavLink className={item} activeClassName="active" to={routes.submit}>
            <Icon name='ticket' /> Submit Ticket
          </NavLink>
        </Menu>
        {/* Banner */}
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
        {/* Page Content */}
        <Route path={routes.home} component={HomePage} exact/>
        <Route path={routes.login} component={LoginPage} exact />
        <Route path={routes.submit} component={SubmitTicketPage} exact/>
      </div>
    )
  }
}

export default App;
