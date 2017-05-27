import React from 'react';
import ListItem from '../list_item/list_item';
import Title from '../title/title';
import DoneRow from '../done_row/done_row';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.fileData);
    return (
      <div className='file-browser'>
        <Title />
        {this.props.fileData.map((fileItem, id) => (
          <ListItem
            key={id}
            name={fileItem.name}
            type={fileItem.type}
            private={fileItem.private}
            children={fileItem.children || []}
          />
        ))}
        <DoneRow />
      </div>
    );
  }
}


export default App;
