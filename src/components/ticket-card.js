import React, { Component } from 'react';
import { Card, Icon }  from 'semantic-ui-react';
import classnames from 'classnames';

class TicketCard extends Component {
  render() {
    const { selected } = this.props;

    return (
      <Card raised className={classnames({dark:selected})}>
        <Card.Content>
          <Card.Header>
            <Icon name='ticket'/> Jane Doe
          </Card.Header>
          <Card.Meta>
            Late by 26 minutes <Icon name='time'/>
          </Card.Meta>
          <Card.Description>
            #212 Need help with Internet
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default TicketCard;
