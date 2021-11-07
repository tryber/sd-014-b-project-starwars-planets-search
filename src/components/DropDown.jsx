import PropTypes from 'prop-types';
import React from 'react';

export default function DropDown(props) {
  const { array, name, dataTest, handleChange } = props;

  return (
    <label name={ name } htmlFor={ name }>
      <select
        data-testid={ dataTest }
        name={ name }
        onChange={ ({ target: { value } }) => handleChange(value) }
      >
        {array.map((item, index) => <option key={ index }>{item}</option>)}
      </select>
    </label>
  );
}

DropDown.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
