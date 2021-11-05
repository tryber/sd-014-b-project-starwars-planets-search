import React, { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

function SearchForm() {
  const {
    name,
    setNames,
    column,
    setColumn,
    filteredColumnOptions,
    comparision,
    setComparision,
    value,
    setValue,
    filters: { filterByNumericValues },
    setNumericValues,
  } = useContext(PlanetContext);

  const handleClick = (filterColumn) => { // testar depois do 4
    const keepFilter = filterByNumericValues
      .filter((target) => target.column !== filterColumn);
    setNumericValues(keepFilter);
  };

  return (
    <form>
      <label htmlFor="name-filter">
        Nome:
        <input
          data-testid="name-filter"
          type="text"
          value={ name }
          onChange={ (event) => setNames(event.target.value) }
        />
      </label>
      <label htmlFor="column-filter">
        Característica:
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ (event) => setColumn(event.target.value) }
        >
          { filteredColumnOptions.map((option, index) => (
            <option value={ option } key={ index }>
              {option}
            </option>
          )) }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Condição:
        <select
          data-testid="comparison-filter"
          value={ comparision }
          onChange={ (event) => setComparision(event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Quantidade:
        <input
          data-testid="value-filter"
          type="number"
          value={ value }
          onChange={ (event) => setValue(event.target.value) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setNumericValues([
          ...filterByNumericValues,
          { column, comparision, value },
        ]) }
      >
        Adicionar Filtro
      </button>
      <div>
        {filterByNumericValues.map((filter, index) => (
          <span key={ index } data-testid="filter">
            {`Mostrando filtros para:
            ${filter.column} ${filter.comparision} ${filter.value}`}
            <button
              type="button"
              onClick={ () => handleClick(filter.column) }
            >
              X
            </button>
          </span>
        ))}
      </div>
    </form>
  );
}

export default SearchForm;
