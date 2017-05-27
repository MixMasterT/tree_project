import React from 'react';

import Icon from '../icon/icon';

const ItemTitle = ({ parentProps, parentState, handleClick }) => {
  const { type, name } = parentProps;
  const { open } = parentState;
  return (
    <div className='item-title'
      onClick={handleClick}
    >
      {type==='folder' ? <Icon icon={open ? 'minus' : 'plus'} /> : '' }
      <Icon icon={parentProps.private ? 'private' : type } />
      <h3 className='file-name'>{name}</h3>
    </div>
  );
}

export default ItemTitle;
