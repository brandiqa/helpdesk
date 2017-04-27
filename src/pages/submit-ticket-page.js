import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import SubmitTicketForm from '../components/submit-ticket-form';

class SubmitTicketPage extends Component {
  render() {
    return (
      <Container>
        <Segment className='centered' style={{marginTop:'5vh'}} compact padded>
          <SubmitTicketForm/>
        </Segment>
      </Container>
    );
  }
}

export default SubmitTicketPage;
