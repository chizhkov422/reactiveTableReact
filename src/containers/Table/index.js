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

  removingItem = (id) => {
    const localStorageData = JSON.parse(localStorage.getItem('users'));
    let stringifyObject;
    let newObject = {};
    let newState = [];

    for (let key in localStorageData) {
      if (parseInt(key, 10) !== id) {
        newObject[key] = localStorageData[key];
        newState.push(localStorageData[key]);
      }
    }
    stringifyObject = JSON.stringify(newObject)
    localStorage.setItem('users', stringifyObject);

    this.setState({ data: newState });
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