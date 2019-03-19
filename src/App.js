import React, { Component } from 'react';

import FormComponent from './components/Form'
import TableContainer from './containers/Table'

import './App.css';

class App extends Component {
  state = {
    users: null,
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
  render() {
    console.log(this.state.users)
    if (this.state.users) {
      return (
        <>
          <TableContainer users={this.state.users} />
          <FormComponent addDataToLocalStorage={this.addDataToLocalStorage} />
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
