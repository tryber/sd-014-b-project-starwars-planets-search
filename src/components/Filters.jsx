import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Filters() {
  const [filterColum, setFilterColum] = useState({
    colum: 'population',
    comparison: 'maior que',
    value: '10000',
  });

  const [options, setOptions] = useState({
    options: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  });

  const {
    inputName,
    setInputName,
    filters,
    setFilters,
  } = useContext(PlanetsContext);

  function sendFiltersByColumn() {
    setOptions({
      ...options,
      options: options.options.filter((option) => option !== filterColum.colum),
    });
    setFilters({ ...filters, filtersByColumn: filterColum });
  }

  function handleDeleteFilter() {
    setFilters({
      ...filters,
      filtersByColumn: {
        ...filters.filtersByColumn,
        colum: '',
        comparison: '',
        value: '',
      },
    });
    console.log(filters);
  }

  return (
    <div>
      <label htmlFor="name">
        Plannet Name:
        <input
          id="name-search"
          value={ inputName }
          name="name"
          onChange={ ({ target }) => setInputName(target.value) }
          data-testid="name-filter"
        />
      </label>

      <label htmlFor="column" data-testid="filter">
        <select
          data-testid="column-filter"
          value={ filterColum.colum }
          onChange={ ({ target }) => setFilterColum(
            { ...filterColum, colum: target.value },
          ) }
        >
          { options.options.map(
            (option, index) => <option key={ index } value={ option }>{ option }</option>,
          )}
        </select>
        <button type="button" onClick={ () => handleDeleteFilter() }>X</button>
      </label>

      <label htmlFor="comparison" data-testid="filter">
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => setFilterColum(
            { ...filterColum, comparison: target.value },
          ) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <button
          type="button"
          onClick={ () => handleDeleteFilter() }
        >
          X
        </button>
      </label>

      <label htmlFor="number" data-testid="filter">
        <input
          type="number"
          data-testid="value-filter"
          onChange={ ({ target }) => setFilterColum(
            { ...filterColum, value: target.value },
          ) }
        />
        <button type="button" onClick={ () => handleDeleteFilter() }>X</button>
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ sendFiltersByColumn }
      >
        Filtrar
      </button>
    </div>
  );
}
