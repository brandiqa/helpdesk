import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Icon, Button, Input } from 'semantic-ui-react'

class TicketsPage extends Component {
  render() {
    return(
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} width='thin' vertical inverted visible color='grey'>
          <Menu.Item active>
             <Icon name='users' />
             All Tickets
           </Menu.Item>
           <Menu.Item>
              <Icon name='edit' />
              Open Tickets
            </Menu.Item>
            <Menu.Item>
               <Icon name='user' />
               My Tickets
             </Menu.Item>
            <Menu.Item>
               <Icon name='archive' />
               Closed Tickets
             </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Menu style={{width:"92vw"}}>
            <Menu.Item header><Icon name='laptop' /> HelpDesk</Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
               <Input icon='search' placeholder='Search tickets...' />
             </Menu.Item>
              <Menu.Item>
                Logged in as Admin
              </Menu.Item>
              <Menu.Item>
                <Button basic>Logout</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Segment basic padded>

            <p>Tickets Dashboard</p>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default TicketsPage;
