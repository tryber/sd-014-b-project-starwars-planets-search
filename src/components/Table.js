import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function Table() {
  const { filter, keys } = useContext(DataContext);
  return (
    <table>
      <thead>
        <tr>
          { keys.map(
            (key, index) => (
              <th key={ index }>
                {key[0].toUpperCase() + key.substr(1) }
              </th>
            ),
          )}
        </tr>
      </thead>
      <tbody>
        { filter.map((planet, index) => (
          <tr key={ index }>
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
  );
}

export default Table;
