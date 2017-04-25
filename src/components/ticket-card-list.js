import React, { Component } from 'react';
import { Menu, Segment, Icon, Dropdown, Card }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import TicketCard from './ticket-card';

const options = [
  {key:'all',value:'*',text:'All Tickets'},
  {key:'owner',value:'owner',text:'My Tickets'},
  {key:'open',value:'open',text:'Open Tickets'},
  {key:'closed',value:'closed',text:'Closed Tickets'},
]

class TicketCardList extends Component {
  render() {
    return (
      <div>
        <Menu style={{marginBottom:0, backgroundColor:'#F3F4F5'}}>
          <NavLink className='item' to='/dashboard/tickets'>
            <Icon name='chevron left'/>
          </NavLink>
          <Menu.Item>
            <Dropdown options={options} defaultValue='*'/>
          </Menu.Item>
        </Menu>
        <Segment secondary style={{height:'90vh', marginTop:0}} className='right-inner-shadow'>
          <Card.Group>
            <TicketCard />
            <TicketCard selected={true}/>
            <TicketCard/>
          </Card.Group>
        </Segment>
      </div>
    );
  }
}

export default TicketCardList;
