import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

export default function DropDown(props) {
  const { array, name, dataTest, handleChange } = props;
  const { filters: { filterByNumericValues } } = useContext(tableContext);

  return (
    <label name={ name } htmlFor={ name }>
      <select
        data-testid={ dataTest }
        name={ name }
        onChange={ ({ target: { value } }) => handleChange(value) }
      >
        {array.map((item, index) => (
          filterByNumericValues[0].column !== item
            ? <option key={ index }>{item}</option> : null))}
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
