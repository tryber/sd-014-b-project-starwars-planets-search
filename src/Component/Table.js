import React, { useContext } from 'react';
import planetContext from '../Context/planetContext';

function Table() {
  const { filtered } = useContext(planetContext);

  return (
    <table className="table">
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Name</th>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Orbital Period</th>
          <th>Population</th>
          {/* <th>Residents</th> */}
          <th>Rotation Period</th>
          <th>Surface Water</th>
          <th>Terrain</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((planet, index) => (
          <tr key={ index }>
            {/* <td>{index + 1}</td> */}
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.edited}</td>
            <td>{planet.films}</td>
            <td>{planet.gravity}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.population}</td>
            {/* <td>{planet.residents}</td> */}
            <td>{planet.rotation_period}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td><a href="planet.url">{planet.url}</a></td>
          </tr>
        ))}
      </tbody>

    </table>
  );
}
export default Table;
