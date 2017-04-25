import React, { Component } from 'react';
import { Grid, Segment, Menu }  from 'semantic-ui-react';
import TicketList from '../components/ticket-list';
import { brand } from '../styles';

class TicketPage extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={2} style={{paddingRight:0}}>
          <TicketList/>
        </Grid.Column>
        <Grid.Column width={14} style={{paddingLeft:0}}>
          <Grid divided>
            <Grid.Column width={3} style={{paddingRight:0}}>
              <Menu inverted color={brand}>
              </Menu>
              <Segment basic style={{height:'90vh'}}>
                <p>Contact Detail</p>
              </Segment>
            </Grid.Column>
            <Grid.Column width={13} style={{paddingLeft:0}}>
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
