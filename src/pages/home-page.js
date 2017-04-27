import React, { Component } from 'react';
import { Grid, Segment, Divider, Header } from 'semantic-ui-react';
import SubmitTicketForm from '../components/submit-ticket-form';
import LoginForm from '../components/login-form';

class HomePage extends Component {
  render() {
    return (
      <div style={{marginTop:'4vh'}}>
        <Header textAlign='center'>Providing context-aware ticketing software to help support departments operate efficiently.</Header>
        <Grid container stackable style={{marginTop:'20px'}}>
          <Grid.Column width={6}>
            <Segment>
              <LoginForm/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Divider vertical>Or</Divider>
          </Grid.Column>
          <Grid.Column width={9}>
            <Segment>
              <SubmitTicketForm/>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
