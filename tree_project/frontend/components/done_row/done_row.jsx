import React from 'react';

class DoneRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='done-row'>
        <a href='#'>Link</a>
        <button>Done</button>
      </div>
    );
  }
}

export default DoneRow;
