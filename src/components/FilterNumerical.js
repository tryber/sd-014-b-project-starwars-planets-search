import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import ButtonFilter from './ButtonFilter';
import ComparisonFilter from './ComparisonFilter';
import InputValue from './InputValue';
import SelectColumn from './SelectColumn';

const FilterNumerical = () => {
  const {
    NumericalFilter,
    setNumericalFilter,
    availableFilters,
    setAvailableFilters,
    NumericalFilters,
  } = useContext(StarWarsContext);

  const handleFilters = () => {
    setNumericalFilter([
      ...NumericalFilters,
      NumericalFilter,
    ]);

    setAvailableFilters(availableFilters
      .filter((filter) => filter !== NumericalFilter.column));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFilters();
  };

  return (
    <form onSubmit={ handleSubmit }>
      <SelectColumn />
      <ComparisonFilter />
      <InputValue />
      <ButtonFilter />
    </form>
  );
};

export default FilterNumerical;
