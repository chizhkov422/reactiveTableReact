import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TableRowComponent from './TableRow'

const Table = styled.table`
  width: 90%;
  margin-left: 5%;
  margin-top: 20px;
  margin-bottom: 100px;
  color: white;
  text-align: center;
  border: 5px solid white;
  border-collapse:collapse;
`;

const TableRow = styled.tr`
  background-color: ${props => props.doubles ? '#0dab0d' : 'transparent'};
`;

const TableHead = styled.td`
  padding: 10px;
  font-weight: 800;
  color: #0dab0d;
`;

class TableComponent extends Component {

  render() {
    const { users, removingItem } = this.props;
    return (
      <Table>
        <thead>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Remove</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {
            users.map((item, index) => {
              return (
                <TableRowComponent key={index} data={item} removingItem={removingItem} index={index} />
              )
            })
          }
        </tbody>
      </Table>
    );
  }
}

TableComponent.propTypes = {
  users: PropTypes.array,
  removingItem: PropTypes.func,
};

TableComponent.defaultProps = {
  users: [],
  removingItem: null,
};

export default TableComponent;