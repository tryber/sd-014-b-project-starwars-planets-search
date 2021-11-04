import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import SelectColumn from './SelectColumn';

const FilterNumerical = () => {
  const {
    NumericalFilter,
    setNumericalFilter,
    availableFilters,
    setAvailableFilters,
  } = useContext(StarWarsContext);

  const handleFilters = () => {
    setNumericalFilter([
      ...NumericalFilter,
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
    </form>
  );
};

export default FilterNumerical;
