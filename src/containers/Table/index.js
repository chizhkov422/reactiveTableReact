import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableComponent from '../../components/Table'

class TableContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.users,
    };
  }


  render() {
    const { data } = this.state;
    return (
      <TableComponent users={data} removingItem={this.removingItem} />
    );
  }
}

TableContainer.propTypes = {
  users: PropTypes.array,
};

TableContainer.defaultProps = {
  users: {},
};

export default TableContainer;