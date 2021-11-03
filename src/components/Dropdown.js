import React from 'react';
import PropTypes from 'prop-types';

export default function Dropdown({ testid, options, label }) {
  return (
    <select data-testid={ testid } name="" id="">
      {options.map((option, index) => (
        <option key={ index } value={ option }>
          {label[index]}
        </option>
      ))}
    </select>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  testid: PropTypes.string.isRequired,
  label: PropTypes.arrayOf(PropTypes.string).isRequired,
};
