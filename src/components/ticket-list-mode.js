import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import TicketItem from './ticket-item';

class TicketListMode extends Component {
  render() {
    return(
      <Item.Group divided style={{width:'90vw'}}>
        <TicketItem/>
        <TicketItem/>
        <TicketItem/>
      </Item.Group>
    );
  }
}

export default TicketListMode;
