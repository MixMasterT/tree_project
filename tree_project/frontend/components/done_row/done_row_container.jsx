import React from 'react';
import { connect } from 'react-redux';
import DoneRow from './done_row.jsx';

const mapStateToProps = (state, ownProps) => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoneRow);
