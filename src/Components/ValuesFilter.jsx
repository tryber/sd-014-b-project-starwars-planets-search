import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function ValuesFilter() {
  const {
    filters,
    setFilters,
    filterOptions,
    setFilterOptions,
  } = useContext(PlanetsContext);

  let columnsIndex = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const handleChange = ({ target }) => {
    const { value, id } = target;
    setFilterOptions({
      ...filterOptions,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filterOptions,
      ],
    });
    setFilterOptions({
      column: '',
      comparison: 'maior que',
      value: '0',
    });
  };

  const handleDelete = (columnName) => {
    const { filterByNumericValues } = filters;
    const newFilterObj = filterByNumericValues.filter((currFilter) => (
      currFilter.column !== columnName
    ));
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...newFilterObj,
      ],
    });
    columnsIndex.push(columnName);
  };

  const { filterByNumericValues } = filters;

  if (filterByNumericValues) {
    filterByNumericValues.map((filter) => {
      const columnName = filter.column;
      const newArr = columnsIndex.filter((column) => column !== columnName);
      columnsIndex = newArr;
      return columnsIndex;
    });
  }

  if (columnsIndex.length === 1 && filterOptions.column === '') {
    setFilterOptions({
      column: columnsIndex[0],
      comparison: 'maior que',
      value: '0',
    });
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="column">
          Coluna
          <select id="column" data-testid="column-filter" onChange={ handleChange }>
            {columnsIndex.map((column) => (
              <option key={ column } value={ column }>{ column }</option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison">
          Compração
          <select
            id="comparison"
            data-testid="comparison-filter"
            onChange={ handleChange }
          >
            <option selected value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            value={ filterOptions.value }
            data-testid="value-filter"
            onChange={ handleChange }
          />
        </label>
        <button type="submit" data-testid="button-filter">Aplicar filtro</button>
      </form>
      <h3>Filtros ativos</h3>
      {filterByNumericValues.length >= 1 ? filterByNumericValues.map((filter) => (
        <div key={ filter.column } data-testid="filter">
          <span>{ filter.column }</span>
          {' '}
          <span>{ filter.comparison }</span>
          {' '}
          <span>{ filter.value }</span>
          {' '}
          <button
            type="button"
            onClick={ () => handleDelete(filter.column) }
          >
            X
          </button>
        </div>
      )) : <span>Nenhum filtro aplicado</span>}
    </div>
  );
}

export default ValuesFilter;
