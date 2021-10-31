import React, { useContext } from 'react';
import MyContext from '../MyContext';

export default function Table() {
  const { contextValue } = useContext(MyContext);
  const { data, filterByName } = contextValue;

  if (data === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Orbitual Period</th>
          <th>Population</th>
          <th>Rotaion Period</th>
          <th>Surface Water</th>
          <th>Terrain</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {
          data
            .filter((planets) => planets.name.toLowerCase().includes(
              filterByName.name.toLowerCase(),
            ))
            .map((planets) => (
              <tr key={ planets.name }>
                <td>{planets.name}</td>
                <td>{planets.climate}</td>
                <td>{planets.created}</td>
                <td>{planets.diameter}</td>
                <td>{planets.edited}</td>
                <td>{planets.films}</td>
                <td>{planets.gravity}</td>
                <td>{planets.orbital_period}</td>
                <td>{planets.population}</td>
                <td>{planets.rotation_period}</td>
                <td>{planets.surface_water}</td>
                <td>{planets.terrain}</td>
                <td>{planets.url}</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}
