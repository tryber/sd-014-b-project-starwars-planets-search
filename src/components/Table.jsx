import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Loading from './Loading';

export default function Table() {
  const { dados, planets, filters } = useContext(StarWarsContext);

  if (!planets.length) {
    return <Loading />;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(planets[0]).map((planet) => (
              <th key={ planet }>
                {planet}
              </th>))}
          </tr>
        </thead>
        <tbody>
          {dados
            .filter((planet) => planet.name.toLowerCase().includes(
              filters.filterByName.name.toLowerCase(),
            ))
            .map((planet) => (
              <tr key={ planet.created }>
                <td data-testid="planet-name">{planet.name}</td>
                <td>{planet.climate}</td>
                <td>{planet.created}</td>
                <td>{planet.diameter}</td>
                <td>{planet.edited}</td>
                <td>{planet.films}</td>
                <td>{planet.gravity}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.population}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.terrain}</td>
                <td>{planet.url}</td>
              </tr>))}
        </tbody>
      </table>
    </div>
  );
}
