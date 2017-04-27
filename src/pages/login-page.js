import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import LoginForm from '../components/login-form';

class LoginPage extends Component {
  render() {
    return (
      <Container>
        <Segment compact padded style={{margin:'5vh auto 0 auto'}}>
          <LoginForm/>
        </Segment>
      </Container>
    )
  }
}

export default LoginPage;
