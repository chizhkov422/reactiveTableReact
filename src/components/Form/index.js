import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  width: 300px;
  height: auto;
  padding: 10px;
  margin: 20px auto;
  border: 2px solid #0dab0d;
  border-radius: 10px;
`;

const InputBlock = styled.div`
  width: 250px;
  margin-bottom: 10px;
  margin: 0 auto 10px auto;
`;

const LabelInput = styled.label`
  color: #0dab0d;
`;

const Input = styled.input`
  width: 230px;
  height: 20px;
  margin: 5px auto 0 auto;
  padding: 5px 10px;
  background-color: #297900;
  border-radius: 5px;
  border: ${props => props.warning ? '2px solid red' : '1px solid #0dab0d'};
  font-size: 14px;
  color: white;

  &::-webkit-input-placeholder {
    color: #050a46;
    font-size: 14px;
  };
  &::-moz-placeholder {
    color: #050a46;
    font-size: 14px;
  };
  &:-moz-placeholder {
    color: #050a46;
    font-size: 14px;
  };
  &:-ms-input-placeholder {
    color: #050a46;
    font-size: 14px;
  };
`;

const Button = styled.button`
  display: block;
  width: 100px;
  border-radius: 5px;
  margin: 0 auto;
  border: 2px solid #0dab0d;
  background-color: white;
  color: #0dab0d;

  &:disabled {
    border: 2px solid red;
    color: red;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 0 0 5px 0;
`;

class FormComponent extends Component {

  state = {
    disabledButton: true,
    inputValues: {
      age: '',
      firstName: '',
      lastName: '',
      phone: '',
    },
    warnings: {
      firstNameWarning: false,
      lastNameWarning: false,
      phoneWarning: false,
      ageWarning: false,
    }
  };

  setStateForAddButton = () => {
    // Check fill field
    for (let key in this.state.inputValues) {
      if (!this.state.inputValues[key] && key !== 'id') {
        this.setState({ disabledButton: true });
        return;
      }
    }
    // Check warnings
    for (let key in this.state.warnings) {
      if (this.state.warnings[key]) {
        this.setState({ disabledButton: true });
        return;
      }
    }

    this.setState({ disabledButton: false });
  }
  changeHandlerForFirstNameInput = async (e) => {
    e.persist();
    //Change value
    let inputValues = { ...this.state.inputValues };
    inputValues.firstName = e.target.value;
    await this.setState({ inputValues });

    //Validation 
    let regExp = /^[a-z ,.'-]+$/i;

    if (!regExp.test(e.target.value)) {
      let warnings = { ...this.state.warnings };

      warnings.firstNameWarning = true;
      await this.setState({ warnings });
    } else {
      let warnings = { ...this.state.warnings };

      warnings.firstNameWarning = false;
      await this.setState({ warnings });
    }

    this.setStateForAddButton();
  }
  changeHandlerForLastNameInput = async (e) => {
    e.persist();
    //Change value
    let inputValues = { ...this.state.inputValues };
    inputValues.lastName = e.target.value;
    await this.setState({ inputValues });

    //Validation 
    let regExp = /^[a-z ,.'-]+$/i;

    if (!regExp.test(e.target.value)) {
      let warnings = { ...this.state.warnings };

      warnings.lastNameWarning = true;
      await this.setState({ warnings });
    } else {
      let warnings = { ...this.state.warnings };

      warnings.lastNameWarning = false;
      await this.setState({ warnings });
    }

    this.setStateForAddButton();
  }
  changeHandlerForPhoneInput = async (e) => {
    e.persist();
    //Change value
    let inputValues = { ...this.state.inputValues };
    inputValues.phone = e.target.value;
    await this.setState({ inputValues });

    //Validation
    let regExp = /^\d[\d() -]{4,14}\d$/;

    if (!regExp.test(e.target.value)) {
      let warnings = { ...this.state.warnings };

      warnings.phoneWarning = true;
      await this.setState({ warnings });
    } else {
      let warnings = { ...this.state.warnings };

      warnings.phoneWarning = false;
      await this.setState({ warnings });
    }

    this.setStateForAddButton();
  }
  changeHandlerForAgeInput = async (e) => {
    e.persist();
    //Change value
    let inputValues = { ...this.state.inputValues };
    inputValues.age = e.target.value;
    await this.setState({ inputValues });

    // Validation
    let warnings = { ...this.state.warnings };
    if (e.target.value <= 0) {
      warnings.ageWarning = true;
      await this.setState({ warnings });
    } else {
      warnings.ageWarning = false;
      await this.setState({ warnings });
    }

    this.setStateForAddButton();
  }
  clickHandlerForAddBtn = (event) => {
    this.props.addDataToLocalStorage(this.state.inputValues, event);

    let inputValues = { ...this.state.inputValues };

    for (let key in inputValues) {
      inputValues[key] = '';
    }

    this.setState({ inputValues });
    this.setState({ disabledButton: true });
  }

  render() {

    const {
      warnings,
      inputValues,
      disabledButton,
    } = this.state;

    return (
      <Form>
        <InputBlock>
          <LabelInput htmlFor="firstName">First name</LabelInput>
          <Input
            warning={warnings.firstNameWarning}
            id="firstName"
            type="text"
            value={inputValues.firstName}
            onChange={this.changeHandlerForFirstNameInput}
          ></Input>
          {
            warnings.firstNameWarning ?
              <ErrorMessage>The first name must consist only of Latin letters</ErrorMessage> :
              ''
          }

        </InputBlock>

        <InputBlock>
          <LabelInput htmlFor="lastName">Last name</LabelInput>
          <Input
            warning={warnings.lastNameWarning}
            id="lastName"
            type="text"
            value={inputValues.lastName}
            onChange={this.changeHandlerForLastNameInput}
          ></Input>
          {
            warnings.lastNameWarning ?
              <ErrorMessage>The last name must consist only of Latin letters</ErrorMessage> :
              ''
          }
        </InputBlock>

        <InputBlock>
          <LabelInput htmlFor="phone">Phone</LabelInput>
          <Input
            warning={warnings.phoneWarning}
            id="phone"
            type="text"
            placeholder="093 000 00 00"
            value={inputValues.phone}
            onChange={this.changeHandlerForPhoneInput}
          ></Input>
          {
            warnings.phoneWarning ?
              <ErrorMessage>The phone should consist of 6-16 digits</ErrorMessage> :
              ''
          }
        </InputBlock>

        <InputBlock>
          <LabelInput htmlFor="age">Age</LabelInput>
          <Input
            warning={warnings.ageWarning}
            id="age"
            type="number"
            value={inputValues.age}
            onChange={this.changeHandlerForAgeInput}
          ></Input>
          {
            warnings.ageWarning ?
              <ErrorMessage>Age must be greater than zero</ErrorMessage> :
              ''
          }
        </InputBlock>

        <Button
          disabled={disabledButton}
          onClick={this.clickHandlerForAddBtn}
        >
          Add
        </Button>
      </Form>
    );
  }
}

FormComponent.propTypes = {
  addDataToLocalStorage: PropTypes.func,
};

FormComponent.defaultProps = {
  addDataToLocalStorage: null,
};

export default FormComponent;