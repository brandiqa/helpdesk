import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Icon, Button, Input, Header } from 'semantic-ui-react'
import TicketListMode from '../components/ticket-list-mode';
import authStore from '../stores/auth-store';

class TicketsPage extends Component {
  render() {
    return(
      <Sidebar.Pushable as={Segment} style={{height:'95vh'}}>
        <Sidebar as={Menu} width='thin' color='grey' animation='overlay' vertical inverted visible>
          <Segment basic style={{marginBottom:0, paddingBottom:'2px'}}>
            <Header as='h3' icon textAlign='center' inverted style={{marginBottom:0}}>
             <Icon name='user' circular/>
             Admin
           </Header>
          </Segment>
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
        <Sidebar.Pusher style={{marginLeft:'150px'}}>
          <Menu color='teal' inverted stackable>
            <Menu.Item header active><Icon name='laptop' /> HelpDesk</Menu.Item>
            <Menu.Item >
             <Input icon='search' placeholder='Search tickets...' />
           </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button icon labelPosition='right' inverted onClick={() => authStore.logout()}>
                  <Icon name='sign out'/> Logout
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Segment padded basic style={{marginTop:0}}>
            <Segment vertical>
              <h4><Icon name='star empty'/> All Tickets</h4>
            </Segment>
            <TicketListMode/>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default TicketsPage;
