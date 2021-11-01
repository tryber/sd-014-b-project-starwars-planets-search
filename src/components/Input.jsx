import PropTypes from 'prop-types';
import React from 'react';

function Input({ id, label, value, type, onchange, dataTestid }) {
  return (
    <label htmlFor={ id }>
      {label}
      <input
        type={ type }
        id={ id }
        name={ id }
        value={ value }
        onChange={ (event) => onchange(event) }
        data-testid={ dataTestid }
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default Input;
