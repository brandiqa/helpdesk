import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import SubmitTicketForm from '../components/submit-ticket-form';

class SubmitTicketPage extends Component {
  render() {
    return (
      <Grid centered verticalAlign="middle" columns={3} container>
        <Grid.Column>
          <SubmitTicketForm/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SubmitTicketPage;
