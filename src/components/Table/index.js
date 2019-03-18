import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const TableData = styled.td`
  padding: 10px;
`;

class TableComponent extends Component {

  // state = {
  //   data: null
  // }

  // componentDidMount() {
  //   const { users } = this.props;
  //   this.setState({ data: users });
  // }

  // componentWillReceiveProps(nextProps) {
  //   const { users } = nextProps;
  //   this.setState({ data: users })
  // }

  render() {
    return (
      <Table>
        <thead>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Age</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {
            this.props.users.map((item, index) => {
              return (
                <TableRow
                  doubles={!Boolean(index % 2)}
                  key={index}
                >
                  <TableData>{item.firstName}</TableData>
                  <TableData>{item.lastName}</TableData>
                  <TableData>{item.phone}</TableData>
                  <TableData>{item.age}</TableData>
                </TableRow>
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
};

TableComponent.defaultProps = {
  users: {},
};

export default TableComponent;