import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const ComparisonFilter = () => {
  const {
    numericalFilter,
    setNumericalFilter,
  } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setNumericalFilter({
      ...numericalFilter,
      comparison: target.value,
    });
  };

  const comparisons = ['maior que', 'menor que', 'igual a'];

  const optionsCreate = (options) => (
    options.map((filter) => (
      <option
        key={ filter }
        value={ filter }
      >
        { filter }
      </option>
    ))
  );

  return (
    <select
      data-testid="comparison-filter"
      value={ numericalFilter.comparison }
      id="comparison-filter"
      onChange={ handleChange }
    >
      { optionsCreate(comparisons) }
    </select>

  );
};

export default ComparisonFilter;
