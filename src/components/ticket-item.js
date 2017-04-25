import React, { Component } from 'react';
import { Item, Icon, Button } from 'semantic-ui-react';

class TicketItem extends Component {
  render() {
    return (
      <Item>
        <Icon name='mail' circular size='large' style={{marginRight:'16px'}}/>
        <Item.Content>
          <Item.Header>#312 Internet Problem</Item.Header>
          <Item.Meta>Susan 25 minutes left</Item.Meta>
          <Item.Extra>
            <Button floated='right' basic color='orange'>
              View
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default TicketItem;
