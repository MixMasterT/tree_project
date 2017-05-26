import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import fileData from '../../data.json';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('react-root');
  const _state = {};
  _state['fileData'] = fileData;
  const store = configureStore(_state);

  ReactDOM.render(<Root store={ store } />, root);
});
