import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const SelectColumn = () => {
  const {
    numericalFilter,
    setNumericalFilter,
    availableFilters,
  } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setNumericalFilter({
      ...numericalFilter,
      column: target.value,
    });
  };

  const renderOptions = (options) => (
    options.map((filter) => (
      <option
        key={ filter }
        value={ filter }
      >
        { filter }
      </option>
    ))
  );

  useEffect(() => {
    const [first] = availableFilters;
    setNumericalFilter((prevState) => ({
      ...prevState,
      column: first,
    }));
  }, [availableFilters, setNumericalFilter]);

  return (
    <select
      data-testid="column-filter"
      value={ numericalFilter.column }
      id="filter-by-column"
      onChange={ handleChange }
    >
      { renderOptions(availableFilters) }
    </select>
  );
};

export default SelectColumn;
