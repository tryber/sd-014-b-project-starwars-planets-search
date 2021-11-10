import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const InputValue = () => {
  const { numericalFilter, setNumericalFilter } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setNumericalFilter({
      ...numericalFilter,
      value: target.value,
    });
  };

  return (
    <input
      data-testid="value-filter"
      type="number"
      id="value-filter"
      onChange={ handleChange }
      required
    />
  );
};

export default InputValue;
