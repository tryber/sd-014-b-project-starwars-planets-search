import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import ButtonFilter from './ButtonFilter';
import ComparisonFilter from './ComparisonFilter';
import InputValue from './InputValue';
import SelectColumn from './SelectColumn';

const FilterNumerical = () => {
  const {
    numericalFilter,

    availableFilters,
    setAvailableFilters,

    numericalFilters,
    setNumericalFilters,
  } = useContext(StarWarsContext);

  const handleFilters = () => {
    setNumericalFilters([
      ...numericalFilters,
      numericalFilter,
    ]);

    setAvailableFilters(availableFilters
      .filter((filter) => filter !== numericalFilter.column));
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
