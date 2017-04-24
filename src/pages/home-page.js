import React, { Component } from 'react';
import { Grid, Segment, Divider } from 'semantic-ui-react';
import SubmitTicketForm from '../components/submit-ticket-form';
import LoginForm from '../components/login-form';

class HomePage extends Component {
  render() {
    return (
      <div style={{marginTop:'4vh'}}>
        <h3 className="text-center">Providing context-aware ticketing software to help companies operate efficiently.</h3>
        <Grid container style={{marginTop:'20px'}}>
          <Grid.Column width={9}>
            <Segment>
              <SubmitTicketForm/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Divider vertical>Or</Divider>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              <LoginForm/>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
