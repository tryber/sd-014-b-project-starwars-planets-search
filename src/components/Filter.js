import React, { useContext, useState } from 'react';
import ContextSWP from '../context/ContextSWP';

const filterInitialState = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const ordenation = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'terrain',
  'surface_water',
  'population',
];

export default function Filter() {
  const [numberInput, setNumberInput] = useState(0);
  const [filters, setFilters] = useState(filterInitialState);
  const { state, setFilterByName,
    setFilterNumericValues, removeFilter, setOrdenation } = useContext(ContextSWP);

  const filterValue = () => {
    const column = document.getElementById('column-filter').value;
    const comparison = document.getElementById('comparison-filter').value;
    setFilterNumericValues({
      value: numberInput,
      column,
      comparison,
    });
    setFilters(filters.filter((i) => i !== column));
  };

  const numberChange = (event) => {
    const { value } = event.target;
    if (value.match(/^[0-9]/)) setNumberInput(event.target.value);
  };

  const removeFilters = () => {
    const column = document.getElementById('column-filter-view').textContent;
    setFilters([...filters, column]);
    removeFilter(column);
  };

  const tableFilter = (list, func) => (
    <ol>
      {list.filters.filterByNumericValues.map((item, index) => (
        <li key={ index } data-testid="filter">
          <p id="column-filter-view">{item.column}</p>
          <p>{item.comparison}</p>
          <p>{item.value}</p>
          <button type="button" onClick={ func }>X</button>
        </li>
      ))}
    </ol>
  );

  const listOrdenation = () => {
    const sort = document.getElementById('sortDESC')
      .checked ? 'DESC' : 'ASC';
    const column = document.getElementById('select-list').value;
    setOrdenation(column, sort);
  };

  if (!state) return 'Loading';
  return (
    <div>
      <div>
        <select name="order" id="select-list" data-testid="column-sort">
          {ordenation.map((item, key) => (
            <option key={ key } value={ item }>
              {item}
            </option>))}
        </select>
        <label htmlFor="sortASC">
          <input
            type="radio"
            id="sortASC"
            name="column-sort"
            value="ASC"
            data-testid="column-sort-input-asc"
          />
          ASC
        </label>
        <label htmlFor="sortDESC">
          <input
            type="radio"
            id="sortDESC"
            name="column-sort"
            value="DESC"
            data-testid="column-sort-input-desc"
          />
          DESC
        </label>
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={ listOrdenation }
        >
          Ordenar

        </button>
      </div>
      <form>
        <h1>{state.text}</h1>
        <input
          type="text"
          name="name"
          data-testid="name-filter"
          value={ state.filters.filterByName.name }
          onChange={ setFilterByName }
        />
        <select name="select" data-testid="column-filter" id="column-filter">
          {filters.map((item, key) => <option key={ key } value={ item }>{item}</option>)}
        </select>
        <select name="select" id="comparison-filter" data-testid="comparison-filter">
          <option value="menor que">menor que</option>
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="text"
          data-testid="value-filter"
          value={ numberInput }
          onChange={ numberChange }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ filterValue }
        >
          Filtrar

        </button>
      </form>
      <div>
        {tableFilter(state, removeFilters)}
      </div>
    </div>
  );
}
