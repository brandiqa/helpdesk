import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MobxReactForm from 'mobx-react-form';
import { Form, Button } from 'semantic-ui-react';
import validatorjs from 'validatorjs';
import InputField from './input-field';
import TextAreaField from './textarea-field';
import { brand } from '../styles';

const fields = {
  name:{
    name: 'name',
    label: 'Full Name',
    placeholder: 'Enter name',
    type: 'text',
    rules:'string|required'
  },
  email:{
    name: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    type: 'email',
    rules:'email|string|required'
  },
  subject:{
    name: 'subject',
    label: 'Subject',
    placeholder: 'Enter subject line',
    type: 'text',
    rules:'string|required'
  },
  description:{
    name: 'description',
    label: 'Description',
    placeholder: 'Describe here..',
    type: 'textarea',
    rules:'string|required'
  },
}

class MobxForm extends MobxReactForm {
  onSuccess(form) {
    console.log('submit')
  }
}

@observer
class SubmitTicketForm extends Component {

  form = null;

  componentWillMount() {
    const plugins = { dvr: validatorjs };
    this.form = new MobxForm({fields},{plugins});
  }

  render() {
    const form = this.form;

    return (
      <div>
        <h1>Submit a New Ticket</h1>
        <Form onSubmit={form.onSubmit}>
          <InputField field={form.$('name')} />
          <InputField field={form.$('email')} />
          <InputField field={form.$('subject')} />
          <TextAreaField field={form.$('description')} />
          <Button color={brand} disabled={form.isPristine}>Post Ticket</Button>
        </Form>
      </div>
    );
  }
}

export default SubmitTicketForm;
