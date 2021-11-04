import React from 'react';

import PropTypes from 'prop-types';

function Select({ dataTestId, id, nameSelect, onChange, options, value }) {
  return (
    <label htmlFor={ id }>
      <select
        data-testid={ dataTestId }
        name={ nameSelect }
        id={ id }
        onChange={ onChange }
        value={ value }
      >
        { options.map((option, key) => (
          <option key={ key }>
            { option }
          </option>
        )) }
      </select>
    </label>
  );
}

Select.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  nameSelect: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
