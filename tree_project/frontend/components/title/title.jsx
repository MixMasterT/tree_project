import React from 'react';
import Icon from '../icon/icon';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      label: "",
    }
  }

  render() {
    return (
      <div className='title-label'>
        <div className='title'>
          <input
            type='text'
            onChange={(e) => this.setState({ title: e.target.value })}
            value={this.state.title}
            placeholder='Title'
          />
          <Icon icon='x' />
        </div>

        <div className='label'>
          <input
            type='text'
            onChange={(e) => this.setState({ label: e.target.value })}
            value={this.state.label}
            placeholder='Label'
            />
        </div>
      </div>
    );
  }
}

export default Title;
