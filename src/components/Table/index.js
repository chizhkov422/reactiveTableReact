import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TableRowComponent from './TableRow'
import TableHeadComponent from './TableHead'

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

const TableComponent = ({ users, removingItem, orderingColumn }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeadComponent title="First Name" orderingColumn={orderingColumn} columnId='firstName' />
          <TableHeadComponent title="Last Name" orderingColumn={orderingColumn} columnId='lastName' />
          <TableHeadComponent title="Phone" orderingColumn={orderingColumn} columnId='phone' />
          <TableHeadComponent title="Age" orderingColumn={orderingColumn} columnId='age' />
          <TableHeadComponent title="Remove" />
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
  )
}

TableComponent.propTypes = {
  users: PropTypes.array,
  removingItem: PropTypes.func,
  orderingColumn: PropTypes.func,
};

TableComponent.defaultProps = {
  users: [],
  removingItem: null,
  orderingColumn: null,
};

export default TableComponent;