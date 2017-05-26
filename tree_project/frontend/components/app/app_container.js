import React from 'react';
import { connect } from 'react-redux';
import App from './app.jsx';

const mapStateToProps = (state, ownProps) => ({
  fileData: state.fileData,
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
