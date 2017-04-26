import React, { Component } from 'react';
import { Item, Icon, Label } from 'semantic-ui-react';

class ContactDetail extends Component {
  render() {
    return (
      <Item.Group divided>
        <Item>
          <Label.Group circular style={{marginRight:'20px'}} size='huge'>
            <Label content='JD'basic />
          </Label.Group>
          <Item.Content>
            <Item.Header>
              Jane Doe
            </Item.Header>
            <Item.Meta>
              janedoe@example.com
            </Item.Meta>
          </Item.Content>
        </Item>
        <Item>
          <Icon name='user' circular size='large' style={{marginRight:'30px'}}/>
          <Item.Content>
            <Item.Meta>
              Assigned To
            </Item.Meta>
            <Item.Header as='h5'>
              Agent Smith
            </Item.Header>
          </Item.Content>
        </Item>
        <Item>
          <Icon name='line graph' circular size='large' style={{marginRight:'30px'}}/>
          <Item.Content>
            <Item.Meta>
              Status
            </Item.Meta>
            <Item.Header as='h5'>
              Open
            </Item.Header>
          </Item.Content>
        </Item>
        <Item>
          <Icon name='clock' circular size='large' style={{marginRight:'30px'}}/>
          <Item.Content>
            <Item.Meta>
              Priority
            </Item.Meta>
            <Item.Header as='h5'>
              High
            </Item.Header>
          </Item.Content>
        </Item>
        <Item>
          <Icon name='info' circular size='large' style={{marginRight:'30px'}}/>
          <Item.Content>
            <Item.Meta>
              Classification
            </Item.Meta>
            <Item.Header as='h5'>
              Problem
            </Item.Header>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}

export default ContactDetail;
