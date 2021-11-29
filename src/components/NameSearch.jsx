import React, { useContext, useState } from 'react';
import myContext from '../context/Context';

function NameSearch() {
  const {
    filters,
    setFilters,
    handleFilterName,
    handleFilterNumber,
  } = useContext(myContext);

  const [temporaryFilter, setTemporaryFilter] = useState({});

  const handleNameChange = ({ target }) => {
    handleFilterName(target.value);
    setFilters({
      ...filters,
      filtersByName: { name: target.value },
    });
  };

  const handleTemporaryFilter = ({ target }) => {
    setTemporaryFilter({
      ...temporaryFilter,
      [target.name]: target.value,
    });
  };

  const handleFilterChange = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, temporaryFilter],
    });
  };

  const handleButton = () => {
    console.log(temporaryFilter);
    const { column, comparison, value } = temporaryFilter;
    console.log(column, comparison, value);
    handleFilterChange();
    handleFilterNumber(column, comparison, value);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        placeholder="Digite aqui"
        onChange={ handleNameChange }
        type="text"
      />
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleTemporaryFilter }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleTemporaryFilter }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        name="value"
        onChange={ handleTemporaryFilter }
        type="number"
      />
      <button
        data-testid="button-filter"
        onClick={ handleButton }
        type="button"
      >
        Filtrar
      </button>
    </div>
  );
}

export default NameSearch;
