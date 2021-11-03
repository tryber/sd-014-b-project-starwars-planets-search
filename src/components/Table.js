import React, { useContext } from 'react';
import TableRow from './TableRow';
import PlanetsTableContext from '../contexts';

export default function Table() {
  const { data: { planets } } = useContext(PlanetsTableContext);
  planets.forEach((planet) => delete planet.residents);

  return (
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
        {planets.map(
          (planet, index) => <TableRow key={ index } data={ Object.values(planet) } />,
        )}
      </tbody>
    </table>
  );
}
