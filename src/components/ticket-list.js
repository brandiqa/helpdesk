import React, { Component } from 'react';
import { Menu, Segment, Icon }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class TicketList extends Component {
  render() {
    return (
      <div>
        <Menu style={{marginBottom:0, backgroundColor:'#F3F4F5'}}>
          <NavLink className='item' to='/tickets'>
            <Icon name='chevron left'/>
          </NavLink>
        </Menu>
        <Segment secondary style={{height:'95vh', marginTop:0}}>
          <p>List of Ticket Cards</p>
        </Segment>
      </div>
    );
  }
}

export default TicketList;
