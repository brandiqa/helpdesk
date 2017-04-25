import React, { Component } from 'react';
import { Item, Icon, Button, Label } from 'semantic-ui-react';

class TicketItem extends Component {
  render() {
    return (
      <Item>
        <Icon name='mail' circular size='large' style={{marginRight:'16px'}}/>
        <Item.Content>
          <Item.Header>#312 Internet Problem</Item.Header>
          <Item.Meta><Label content='Susan' basic color='teal'/> 25 minutes left <Icon name='hourglass half' color='red'/> </Item.Meta>
          <Item.Extra>
            <Button floated='right' color='orange'>
              View
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default TicketItem;
