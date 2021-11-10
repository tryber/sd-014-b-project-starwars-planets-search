import React from 'react';
import PropTypes from 'prop-types';

export default function Select({ labelText, name, id, onChange, options }) {
  return (
    <label htmlFor={ name }>
      { labelText }
      <select
        name={ name }
        id={ id }
        onChange={ onChange }
        data-testid={ id }
      >
        {
          options.map((option, index) => (
            <option key={ index }>
              {option}
            </option>
          ))
        }
      </select>
    </label>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

Select.defaultProps = {
  labelText: '',
  options: [''],
};
