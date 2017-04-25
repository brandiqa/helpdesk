import React, { Component } from 'react';
import { Menu, Segment, Icon, Dropdown }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const options = [
  {key:'all',value:'*',text:'All Tickets'},
  {key:'owner',value:'owner',text:'My Tickets'},
  {key:'open',value:'open',text:'Open Tickets'},
  {key:'closed',value:'closed',text:'Closed Tickets'},
]

class TicketList extends Component {
  render() {
    return (
      <div>
        <Menu style={{marginBottom:0, backgroundColor:'#F3F4F5'}}>
          <NavLink className='item' to='/tickets'>
            <Icon name='chevron left'/>
          </NavLink>
          <Menu.Item>
            <Dropdown options={options} defaultValue='*'/>
          </Menu.Item>
        </Menu>
        <Segment secondary style={{height:'95vh', marginTop:0}}>
          <p>List of Ticket Cards</p>
        </Segment>
      </div>
    );
  }
}

export default TicketList;
