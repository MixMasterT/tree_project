import React from 'react';
import Icon from '../icon/icon'

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }
  }

  render() {

    return (
      <div
        className='list-item'
        onClick={() => this.setState({ open: !this.state.open })}
      >
        <Icon icon={this.state.open ? 'minus' : 'plus'} />
        <Icon icon={this.props.type} />
        <h3 className='file-name'>{this.props.name}</h3>

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
