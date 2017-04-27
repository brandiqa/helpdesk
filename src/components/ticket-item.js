import React, { Component } from 'react';
import { Item, Icon, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { routes } from '../config/routes';

class TicketItem extends Component {
  render() {
    return (
      <Item>
        <Icon name='mail outline' circular size='large' style={{marginRight:'16px'}}/>
        <Item.Content>
          <Item.Header>
            <NavLink className='orange' to={routes.ticket}>
              #312 Internet Problem
            </NavLink>
          </Item.Header>
          <Item.Meta><Label content='Susan' basic color='teal'/> 25 minutes left <Icon name='hourglass half' color='red'/> </Item.Meta>
        </Item.Content>
      </Item>
    )
  }
}

export default TicketItem;
