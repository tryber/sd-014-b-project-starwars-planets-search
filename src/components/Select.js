import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ id, name, onChange, options, value }) => (
  <label htmlFor={ id }>
    <select
      data-testid={ id }
      id={ id }
      name={ name }
      onChange={ onChange }
      value={ value }
    >
      {
        options.map((option, index) => (
          <option key={ index }>{ option }</option>
        ))
      }
    </select>
  </label>
);

export default Select;

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string,
};

Select.defaultProps = {
  value: '',
};
