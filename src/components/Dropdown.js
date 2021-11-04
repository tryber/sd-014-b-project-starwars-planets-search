import React from 'react';
import PropTypes from 'prop-types';

export default function Dropdown({ testId, options, onSelectedChange }) {
  const renderedOptions = options.map((option) => (
    // if (filters.filterByNumericValues) {

    // }
    <option
      key={ option }
      value={ option }
    >
      {option}
    </option>
  ));

  return (
    <select
      data-testid={ testId }
      onChange={ ({ target: { value } }) => onSelectedChange(value) }
    >
      {renderedOptions}
    </select>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  testId: PropTypes.string.isRequired,
  label: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectedChange: PropTypes.func.isRequired,
};
