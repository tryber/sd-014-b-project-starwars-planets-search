/* eslint-disable react/jsx-max-depth */
import React, { useContext } from 'react';
import { PlanetContext } from '../../context/PlanetProvider';
import './PlanetFinder.css';

export default function PlanetFinder() {
  const {
    planets,
    filters: {
      filterByName: { name, setName },
      filterByNumericValues: [
        { column, setColumn, comparison, setComparison, value, setValue },
      ],
    },
    handleFiltering,
  } = useContext(PlanetContext);

  return (
    <>
      <header>
        <h1>Projeto Star Wars - Trybe</h1>
        <form>
          <fieldset>
            <input
              data-testid="name-filter"
              type="text"
              name="name"
              placeholder="Filtrar por nome"
              value={ name }
              onChange={ (e) => setName(e.target.value) }
            />
          </fieldset>
          <fieldset>
            <select
              data-testid="column-filter"
              name="column"
              value={ column }
              onChange={ (e) => setColumn(e.target.value) }
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
              value={ comparison }
              onChange={ (e) => setComparison(e.target.value) }
            >
              <option value="maior que">maior que</option>
              <option value="menor que">menor que</option>
              <option value="igual a">igual a</option>
            </select>
            <input
              type="number"
              data-testid="value-filter"
              name="value"
              value={ value }
              onChange={ (e) => setValue(e.target.value) }
            />
            <button
              data-testid="button-filter"
              type="button"
              onClick={ handleFiltering }
            >
              Filtrar
            </button>
          </fieldset>
        </form>
      </header>
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
          {planets.map((planet) => (
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
          ))}
        </tbody>
      </table>
    </>
  );
}
