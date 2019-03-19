import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableHead = styled.td`
  padding: 10px;
  font-weight: 800;
  color: #0dab0d;
`;

const OrderIcon = styled.span`
  cursor: pointer;
`;

const TableHeadComponent = ({ title, orderingColumn, columnId }) => {
  return (
    <TableHead>
      {title}
      <OrderIcon
        onClick={() => orderingColumn(columnId)}
      >
        &#8693;
      </OrderIcon>
    </TableHead>
  );
}

TableHeadComponent.propTypes = {
  title: PropTypes.string,
  orderingColumn: PropTypes.func,
  columnId: PropTypes.string,
};

TableHeadComponent.defaultProps = {
  title: '',
  orderingColumn: null,
  columnId: '',
};

export default TableHeadComponent;