import React from 'react';
import Icon from '../icon/icon';
import Title from '../title/title';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.fileData);
    return (
      <div className='file-browser'>
        <Title />
        <Icon icon='file' />
      </div>
    );
  }
}


export default App;
