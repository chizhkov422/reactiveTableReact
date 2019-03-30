import React from 'react';
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

const FormComponent = ({
  warnings,
  inputValues,
  disabledButton,
  changeHandlerForFirstNameInput,
  changeHandlerForLastNameInput,
  changeHandlerForPhoneInput,
  changeHandlerForAgeInput,
  clickHandlerForAddBtn
}) => {

  return (
    <Form>
      <InputBlock>
        <LabelInput htmlFor="firstName">First name</LabelInput>
        <Input
          warning={warnings.firstNameWarning}
          id="firstName"
          type="text"
          value={inputValues.firstName}
          onChange={changeHandlerForFirstNameInput}
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
          onChange={changeHandlerForLastNameInput}
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
          onChange={changeHandlerForPhoneInput}
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
          onChange={changeHandlerForAgeInput}
        ></Input>
        {
          warnings.ageWarning ?
            <ErrorMessage>Age must be greater than zero</ErrorMessage> :
            ''
        }
      </InputBlock>

      <Button
        disabled={disabledButton}
        onClick={clickHandlerForAddBtn}
      >
        Add
        </Button>
    </Form>
  );
}

FormComponent.propTypes = {
  warnings: PropTypes.object,
  inputValues: PropTypes.object,
  disabledButton: PropTypes.bool,
  changeHandlerForFirstNameInput: PropTypes.func,
  changeHandlerForLastNameInput: PropTypes.func,
  changeHandlerForPhoneInput: PropTypes.func,
  changeHandlerForAgeInput: PropTypes.func,
  clickHandlerForAddBtn: PropTypes.func,
};

FormComponent.defaultProps = {
  warnings: {},
  inputValues: {},
  disabledButton: false,
  changeHandlerForFirstNameInput: null,
  changeHandlerForLastNameInput: null,
  changeHandlerForPhoneInput: null,
  changeHandlerForAgeInput: null,
  clickHandlerForAddBtn: null,
};

export default FormComponent;