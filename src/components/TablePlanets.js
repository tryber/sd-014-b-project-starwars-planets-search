import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function TablePlanets() {
  const { data } = useContext(MyContext);
  const firstRow = (
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

  const infoRow = (planet, url) => (
    <tr key={ url }>
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
    <section>
      <table>
        <tbody>
          {firstRow}
          {data.map((planet) => infoRow(planet, planet.url))}
        </tbody>
      </table>
    </section>
  );
}

export default TablePlanets;
