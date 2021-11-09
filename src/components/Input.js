import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, name, onChange, placeholder, type, value }) => (
  <label htmlFor={ id }>
    <input
      data-testid={ id }
      id={ id }
      name={ name }
      onChange={ onChange }
      placeholder={ placeholder }
      type={ type }
      value={ value }
    />
  </label>
);

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  value: '',
};
