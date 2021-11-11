import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import Input from './Input';

function Table() {
  const { data, filter, setFilter, columnList, removeColumn } = useContext(DataContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [filterName] = useState('');

  return (
    <section className="table">
      <Input />
      <select
        data-testid="column-filter"
        onChange={ (event) => setColumn(event.target.value) }
      >
        { columnList.map((option, index) => (
          <option key={ index } value={ option }>{ option }</option>
        ))}

      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (event) => setValue(event.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFilter({
            ...filter,
            filters: {
              filterByNumericValues:
              [{ column, comparison, value }],
            },
          });
          removeColumn(column);
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
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {/* Utilizei o Repo https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/36 de referência */}
          { data.length <= 0 ? <p> Carregando... </p> : data
            .filter((planet) => {
              const numFilter = filter.filters.filterByNumericValues[0];
              let numFiltered = [];

              if (numFilter.comparison === 'menor que') {
                numFiltered = Number(planet[numFilter.column])
                < Number(numFilter.value);
              } else if (numFilter.comparison === 'maior que') {
                numFiltered = Number(planet[numFilter.column])
                > Number(numFilter.value);
              } else if (numFilter.comparison === 'igual a') {
                numFiltered = Number(planet[numFilter.column])
                === Number(numFilter.value);
              } return numFiltered;
            }).filter((planet) => planet.name
              .includes(filterName))
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
                <td>{planet.url }</td>
              </tr>
            )) }
        </tbody>
      </table>
    </section>
  );
}

export default Table;
