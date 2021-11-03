import React from 'react';
import PropTypes from 'prop-types';

export default function SelectGenerator({ dataID, handleChange, value, options, name }) {
  return (
    <select
      name={ name }
      value={ value }
      data-testid={ dataID }
      onChange={ handleChange }
    >
      { options.map((option) => (
        <option key={ option } value={ option }>{option}</option>
      )) }
    </select>
  );
}

SelectGenerator.propTypes = {
  dataID: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
