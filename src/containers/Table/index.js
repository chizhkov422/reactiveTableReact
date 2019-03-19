import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableComponent from '../../components/Table'

class TableContainer extends Component {

  state = {
    orderASK: true,
    users: [],
  }

  componentWillMount() {
    const { users } = this.props;

    this.setState({ users });
  }

  componentWillReceiveProps(nextProps) {
    const { users } = nextProps;

    this.setState({ users });
  }

  orderingColumn = (prop) => {
    const { users, orderASK } = this.state;

    let sortedArray = users.sort(function (firstItem, secondItem) {
      if (orderASK) {
        return (firstItem[prop] > secondItem[prop]) ? 1 : ((firstItem[prop] < secondItem[prop]) ? -1 : 0);
      } else {
        return (secondItem[prop] > firstItem[prop]) ? 1 : ((secondItem[prop] < firstItem[prop]) ? -1 : 0);
      }
    });

    this.setState({ users: sortedArray });
    this.setState({ orderASK: !orderASK });
  }

  render() {
    const { users } = this.state;

    return (
      <TableComponent users={users} removingItem={this.props.removingItem} orderingColumn={this.orderingColumn} />
    );
  }
}

TableContainer.propTypes = {
  users: PropTypes.array,
  removingItem: PropTypes.func,
};

TableContainer.defaultProps = {
  users: [],
  removingItem: null
};

export default TableContainer;