import React, { useContext } from 'react';
import TableRow from './TableRow';
import PlanetsTableContext from '../contexts';
import applyDataFilters from '../data/filters';

export default function Table() {
  const { data: { planets }, filters } = useContext(PlanetsTableContext);
  const { filterByName: { name: planetName } } = filters;
  planets.forEach((planet) => delete planet.residents);

  const filtersToApply = [
    ({ name }) => name.toLowerCase().includes(planetName.toLowerCase()),
  ];
  const filteredPlanets = applyDataFilters(planets, filtersToApply);

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
        {filteredPlanets.map(
          (planet, index) => <TableRow key={ index } data={ Object.values(planet) } />,
        )}
      </tbody>
    </table>
  );
}
