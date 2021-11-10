import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Table() {
  const {
    filteredPlanets,
    filters:
    {
      filterByName: { name },
      filterByNumericValues,
    },
    column,
    usedColumnOptions,
    comparison,
    value,
    setName,
    setColumn,
    setComparison,
    setValue,
    createNewNumericFilter,
    removeNumericFilter } = useContext(PlanetsContext);

  return (
    <section>
      <input
        type="text"
        placeholder="Nome do planeta"
        data-testid="name-filter"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        { usedColumnOptions.map((col, k) => (
          <option value={ col } key={ k }>{col}</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        placeholder="Insira um número"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => createNewNumericFilter(column, comparison, value) }
      >
        Filtrar
      </button>

      <div>
        { filterByNumericValues.map((filter, k) => (
          <p key={ k } data-testid="filter">
            { `${filter.column} ${filter.comparison} ${filter.value}` }
            <button
              type="button"
              onClick={ () => removeNumericFilter(filter.column, k) }
            >
              x
            </button>
          </p>
        ))}
      </div>

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
          { filteredPlanets.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </section>
  );
}

export default Table;
