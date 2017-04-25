import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import MobxReactForm from 'mobx-react-form';
import { Form, Button, Header, Icon } from 'semantic-ui-react';
import validatorjs from 'validatorjs';
import InputField from './input-field';
import { brand, primary } from '../styles';
import authStore from '../stores/auth-store';

const fields = {
  email: {
    name: 'email',
    label: 'Email',
    placeholder: 'Email',
    type: 'email',
    rules:'email|string|false'
  },
  password: {
    name: 'password',
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
    rules:'string|false'
  }
}

class MobxForm extends MobxReactForm {
  onSuccess(form) {
    authStore.login();
  }
}

@observer
class LoginForm extends Component {

  form = null;

  componentWillMount() {
    const plugins = { dvr: validatorjs };
    this.form = new MobxForm({fields},{plugins});
  }

  render() {
    const form = this.form;
    const dashboard = { pathname: '/dashboard/tickets' };

    if (authStore.isAuthenticated) {
      return (
        <Redirect to={dashboard}/>
      )
    }

    return (
      <div>
        <Header color={brand} as='h3'>
          <Icon name="lock"/>Sign in to your Account
        </Header>
        <Form onSubmit={form.onSubmit}>
          <InputField field={form.$('email')} />
          <InputField field={form.$('password')} />
          <Button color={primary} icon labelPosition="left">
            <Icon name="sign in"/>
            Sign In
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
