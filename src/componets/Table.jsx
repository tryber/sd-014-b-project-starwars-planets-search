import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { data, filteredPlanets, isFiltering } = useContext(Context);

  const thead = (
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
    </tr>);

  const tbody = (planet, index) => (
    <tr key={ index }>
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
    </tr>);

  return (
    <table>
      <thead>
        {thead}
      </thead>
      <tbody>
        {!isFiltering
          ? data.map((planet) => tbody(planet, index))
          : filteredPlanets.map((planet) => tbody(planet, index))}
      </tbody>
    </table>
  );
}

export default Table;
