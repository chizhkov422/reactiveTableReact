import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableRow = styled.tr`
  background-color: ${props => props.doubles ? '#0dab0d' : 'transparent'};
`;

const TableData = styled.td`
  padding: 10px;
`;

const TableDataIcon = styled.span`
  cursor: pointer;
`;

class TableComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      index: props.index,
    };
  }

  render() {
    const { data, index } = this.state;
    return (
      <TableRow
        doubles={!Boolean(index % 2)}
      >
        <TableData>{data.firstName}</TableData>
        <TableData>{data.lastName}</TableData>
        <TableData>{data.phone}</TableData>
        <TableData>{data.age}</TableData>
        <TableData>
          <TableDataIcon
            onClick={() => { this.props.removingItem(data.id) }}
          >
            &#128686;
        </TableDataIcon>
        </TableData>
      </TableRow>
    );
  }
}

TableComponent.propTypes = {
  data: PropTypes.object,
  removingItem: PropTypes.func,
  index: PropTypes.number,
};

TableComponent.defaultProps = {
  data: {},
  removingItem: null,
  index: null,
};

export default TableComponent;