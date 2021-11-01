import React from 'react';
import heads from '../data/tableHeads';
import usePlanets from '../hooks/usePlanets';

export default function Table() {
  const { data } = usePlanets();

  return (
    <table>
      <thead>
        <tr>
          {heads.map((head) => (<th key={ head }>{head}</th>))}
        </tr>
      </thead>
      <tbody>
        {data.map((planet) => (
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
  );
}
