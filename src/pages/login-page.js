import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import LoginForm from '../components/login-form';

class LoginPage extends Component {
  render() {
    return (
      <Container>
        <Segment compact padded className='centered' style={{marginTop:'5vh'}}>
          <LoginForm/>
        </Segment>
      </Container>
    )
  }
}

export default LoginPage;
