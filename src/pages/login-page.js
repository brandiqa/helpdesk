import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class LoginPage extends Component {
  render() {
    return (
      <Grid centered verticalAlign="middle" columns={3} container>
        <Grid.Column>
          <p>Login Form</p>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoginPage;
