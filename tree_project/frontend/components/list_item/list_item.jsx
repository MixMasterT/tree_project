import React from 'react';

import Icon from '../icon/icon'

import ItemTitle from './item_title';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }
  }

  render() {

    return (
      <div className='list-item' >

        <ItemTitle
          parentState={this.state}
          parentProps={this.props}
          handleClick={() => this.setState({ open: !this.state.open })}
        />

        { this.state.open ?
          this.props.children.map((child, id) => (
            <ListItem
              key={id}
              name={child.name}
              type={child.type}
              private={child.private}
              children={child.children || []}
            />
          )) : ''
        }
      </div>
    );
  }
}

export default ListItem;
