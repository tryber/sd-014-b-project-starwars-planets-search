import React from 'react';
import PropTypes from 'prop-types';

export default function Select({ labelText, name, id, onChange, value, options }) {
  return (
    <label>
      { labelText }
      <select
        name={ name }
        id={ id }
        onChange={ onChange}
        value={ value }
        data-testid={ id }
      >
       {
         options.map((option, index) => (
          <option key={ option }>
            {option}
          </option>
         ))
       } 
      </select>
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

Input.defaultProps = {
  labelText: '',
  options: [''],
};

