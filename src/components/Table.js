import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { contextValue: { data, filter, setFilter,
    columnOptions, deleteColumn } } = useContext(PlanetsContext);
  const [filterName, setFiltersName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  return (
    <>
      <label htmlFor="search">
        Pesquisar
        <input
          type="text"
          id="search"
          data-testid="name-filter"
          onChange={ (event) => setFiltersName(event.target.value) }
        />
      </label>
      <select
        data-testid="column-filter"
        onChange={ (event) => setColumn(event.target.value) }
      >
        { columnOptions.map((option, index) => (
          <option key={ index } value={ option }>{ option }</option>
        )) }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="value-filter">
        Filtrar Valor
        <input
          type="number"
          id="value-filter"
          data-testid="value-filter"
          onChange={ (event) => setValue(event.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFilter({
            ...filter,
            filters: {
              filterByNumericValues: [{ column, comparison, value }],
            },
          });
          deleteColumn(column);
        } }
      >
        Filtrar
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          { data
            .filter((planet) => {
              const numericValues = filter.filters.filterByNumericValues[0];
              let filteredValue = [];
              if (numericValues.comparison === 'maior que') {
                filteredValue = Number(planet[numericValues.column])
                > Number(numericValues.value);
              } else if (numericValues.comparison === 'menor que') {
                filteredValue = Number(planet[numericValues.column])
                < Number(numericValues.value);
              } else if (numericValues.comparison === 'igual a') {
                filteredValue = Number(planet[numericValues.column])
                === Number(numericValues.value);
              } return filteredValue;
            }).filter((planet) => planet.name.toLowerCase()
              .includes(filterName.toLowerCase()))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
