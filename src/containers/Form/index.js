import React from 'react';
import PropTypes from 'prop-types';

import FormComponent from '../../components/Form'

const FormContainer = ({ addDataToLocalStorage }) => <FormComponent addDataToLocalStorage={addDataToLocalStorage} />

FormContainer.propTypes = {
  addDataToLocalStorage: PropTypes.func,
};

FormContainer.defaultProps = {
  addDataToLocalStorage: null,
};
export default FormContainer;