import PropTypes from 'prop-types';
import React from 'react';

function Select({ id, label, value, onchange, options, dataTestid }) {
  return (
    <label htmlFor={ id }>
      {label}
      <select
        id={ id }
        value={ value }
        data-testid={ dataTestid }
        onChange={ (event) => onchange(event) }
      >
        {options.map(
          (option, index) => (
            <option
              key={ `${index}-${option}` }
              value={ option }
            >
              { option }
            </option>),
        )}
      </select>
    </label>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onchange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Select.defaultProps = {
  label: '',
};

export default Select;
