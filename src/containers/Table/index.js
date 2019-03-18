import React from 'react';
import PropTypes from 'prop-types';

import TableComponent from '../../components/Table'

const TableContainer = ({ users }) => <TableComponent users={users} />

TableContainer.propTypes = {
  users: PropTypes.array,
};

TableContainer.defaultProps = {
  users: {},
};

export default TableContainer;