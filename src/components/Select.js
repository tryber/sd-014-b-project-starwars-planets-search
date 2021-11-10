import PropTypes from 'prop-types';
import React from 'react';

export default function Select({ name, value, id, handleChange, options }) {
  return (
    <select
      name={ name }
      value={ value }
      data-testid={ id }
      onChange={ handleChange }
    >
      {options.map((option) => (
        <option key={ option } value={ option }>{option}</option>
      ))}
    </select>
  );
}

Select.propTypes = {
  handleChange: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  value: PropTypes.string.isRequired,
};
