import React, { Component } from 'react';

import ValidationContainer from '../containers/Validation'
import TableComponent from '../components/Table'


class App extends Component {
  state = {
    users: null,
    orderASK: true,
  };

  async componentDidMount() {
    let usersObject = JSON.parse(localStorage.getItem('users'));
    let usersArray = [];

    for (let key in usersObject) {
      let item = usersObject[key];

      usersArray.push(item);
    }

    await this.setState({ users: usersArray });
  }

  addDataToLocalStorage = async (inputValues, event) => {
    event.preventDefault();

    let localStorageData = JSON.parse(localStorage.getItem('users'));
    let currentStateUsers = this.state.users;
    const id = Date.now();

    inputValues.id = id;

    if (localStorageData) {
      //Change data in localStorage
      let newObject = { ...localStorageData };
      newObject[id] = inputValues;
      let stringifyObject = JSON.stringify(newObject)

      localStorage.setItem('users', stringifyObject);
    } else {
      //Change data in localStorage
      let newObject = { [id]: inputValues };
      let stringifyObject = JSON.stringify(newObject);

      localStorage.setItem('users', stringifyObject);
    }

    currentStateUsers.push(inputValues);

    await this.setState({ users: currentStateUsers });
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
    stringifyObject = JSON.stringify(newObject);
    localStorage.setItem('users', stringifyObject);

    this.setState({ users: newState });
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
    if (this.state.users) {
      return (
        <>
          <TableComponent users={this.state.users} removingItem={this.removingItem} orderingColumn={this.orderingColumn} />
          <ValidationContainer addDataToLocalStorage={this.addDataToLocalStorage} />
        </>
      );
    } else {
      return (
        <h1>... Loading</h1>
      );
    }
  }
}

export default App;
