import PropTypes from 'prop-types';
import React from 'react';

function InputRadio({ id, label, value, type, onclick, dataTestid }) {
  return (
    <label htmlFor={ id }>
      {label}
      <input
        type={ type }
        id={ id }
        name={ id }
        value={ value }
        onClick={ (event) => onclick(event) }
        data-testid={ dataTestid }
      />
    </label>
  );
}

InputRadio.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default InputRadio;
