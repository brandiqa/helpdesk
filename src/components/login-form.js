import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MobxReactForm from 'mobx-react-form';
import { Form, Button } from 'semantic-ui-react';
import validatorjs from 'validatorjs';
import InputField from './input-field';
import { brand } from '../styles';

const fields = {
  email: {
    name: 'email',
    label: 'Email',
    placeholder: 'Email',
    type: 'email',
    rules:'email|string|required'
  },
  password: {
    name: 'password',
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
    rules:'string|required'
  }
}

class MobxForm extends MobxReactForm {
  onSuccess(form) {
    console.log('login')
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

    return (
      <div>
        <h1>Sign in to your Account</h1>
        <Form onSubmit={form.onSubmit}>
          <InputField field={form.$('email')} />
          <InputField field={form.$('password')} />
          <Button color={brand} disabled={form.isPristine}>Sign In</Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
