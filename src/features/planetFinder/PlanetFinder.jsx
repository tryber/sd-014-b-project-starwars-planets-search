import React, { useContext } from 'react';
import { PlanetContext } from '../../context/PlanetProvider';
import './PlanetFinder.css';

export default function PlanetFinder() {
  const {
    planets,
    filters: {
      filterByName: { name, setName },
    },
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
