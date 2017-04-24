import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import LoginForm from '../components/login-form';

class LoginPage extends Component {
  render() {
    return (
      <Grid centered verticalAlign="middle" columns={3} container>
        <Grid.Column>
          <LoginForm />
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoginPage;
