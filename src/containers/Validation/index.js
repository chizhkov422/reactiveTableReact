import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormComponent from '../../components/Form'

class ValidationContainer extends Component {

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
  validationFirstNameInput = async (e) => {
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
  validationForLastNameInput = async (e) => {
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
  validationForPhoneInput = async (e) => {
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
  validationForAgeInput = async (e) => {
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
  addDataToLocalStorage = (event) => {
    this.props.addDataToLocalStorage(this.state.inputValues, event);

    let inputValues = { ...this.state.inputValues };

    for (let key in inputValues) {
      inputValues[key] = '';
    }

    this.setState({ inputValues });
    this.setState({ disabledButton: true });
  }

  render() {
    const { inputValues, warnings, disabledButton } = this.state;

    return (
      <FormComponent
        inputValues={inputValues}
        warnings={warnings}
        disabledButton={disabledButton}
        changeHandlerForFirstNameInput={this.validationFirstNameInput}
        changeHandlerForLastNameInput={this.validationForLastNameInput}
        changeHandlerForPhoneInput={this.validationForPhoneInput}
        changeHandlerForAgeInput={this.validationForAgeInput}
        clickHandlerForAddBtn={this.addDataToLocalStorage}
      />
    );
  }
}

ValidationContainer.propTypes = {
  addDataToLocalStorage: PropTypes.func,
};

ValidationContainer.defaultProps = {
  addDataToLocalStorage: null,
};

export default ValidationContainer;