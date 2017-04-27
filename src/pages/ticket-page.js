import React, { Component } from 'react';
import { Grid, Segment, Menu }  from 'semantic-ui-react';
import TicketCardList from '../components/ticket-card-list';
import ContactDetail from '../components/contact-detail';
import { brand } from '../styles';

class TicketPage extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Column width={3} style={{paddingRight:0}}>
          <TicketCardList/>
        </Grid.Column>
        <Grid.Column width={13} style={{paddingLeft:0}}>
          <Grid stackable divided>
            <Grid.Column width={4} style={{paddingRight:0}}>
              <Menu inverted color={brand}>
              </Menu>
              <Segment basic style={{height:'88vh'}}>
                <ContactDetail/>
              </Segment>
            </Grid.Column>
            <Grid.Column width={12} style={{paddingLeft:0}}>
              <Menu inverted color={brand}>
                <Menu.Item active>
                  Conversation
                </Menu.Item>
              </Menu>
              <Segment basic>
                <p>Ticket Detail</p>
              </Segment>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    )
  }
}

export default TicketPage;
