import React, { useContext } from 'react';
import StarContext from '../context/Context';

const FilterPlanet = () => {
  const {
    setName,
    setColumn,
    objectNumerics,
    setObjectNumerics,
    setComparison,
    setValueSearch,
    setFilterByNumericValues,
    filterByNumericValues,
    setFilters,
    filters,
  } = useContext(StarContext);

  const handleName = (value) => {
    setName({ name: value.toLowerCase() });
  };

  const handleColumn = (value) => {
    setColumn(value);
    setObjectNumerics({
      ...objectNumerics,
      column: value,
    });
  };

  const handleComparison = (value) => {
    setComparison(value);
    setObjectNumerics({
      ...objectNumerics,
      comparison: value,
    });
  };

  const handleValue = (value) => {
    setValueSearch(value);
    setObjectNumerics({
      ...objectNumerics,
      value,
    });
  };

  const handleClick = () => {
    setFilterByNumericValues([...filterByNumericValues, objectNumerics]);
    setFilters({
      ...filters,
      filterByNumericValues,
    });
  };

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ ({ target: { value } }) => handleName(value) }
        placeholder="Search"
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => handleColumn(value) }
      >
        <option>population</option>
        <option>orbital_period </option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => handleComparison(value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="text"
        onChange={ ({ target: { value } }) => handleValue(value) }
        placeholder="Search"
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filter
      </button>
    </form>
  );
};

export default FilterPlanet;
