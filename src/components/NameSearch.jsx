import React, { useContext, useState } from 'react';
import myContext from '../context/Context';

function NameSearch() {
  const {
    filters,
    setFilters,
    handleFilterName,
    handleFilterNumber,
    columns,
    deleteColumns,
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
    const { column, comparison, value } = temporaryFilter;
    deleteColumns(column);
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
        {
          columns.map((item, index) => (
            <option key={ item + index } value={ item }>{ item }</option>
          ))
        }
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
