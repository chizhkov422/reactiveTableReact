import React, { Component } from 'react';

import FormComponent from './components/Form'
import TableComponent from './components/Table'

import './App.css';

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    let usersObject = JSON.parse(localStorage.getItem('users'));
    let usersArray = [];

    for (let key in usersObject) {
      let item = usersObject[key];

      usersArray.push(item);
    }

    this.setState({ users: usersArray });
  }

  addDataToLocalStorage = (inputValues, event) => {
    event.preventDefault();

    let localStorageData = JSON.parse(localStorage.getItem('users'));
    let currentStateUsers = this.state.users;
    const id = Date.now();


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

    this.setState({ users: currentStateUsers })
  }
  render() {
    return (
      <>
        <TableComponent users={this.state.users} />
        <FormComponent addDataToLocalStorage={this.addDataToLocalStorage} />
      </>
    );
  }
}

export default App;
