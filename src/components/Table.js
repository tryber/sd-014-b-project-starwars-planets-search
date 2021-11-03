import React, { useContext } from 'react';
import TableRow from './TableRow';
import PlanetsTableContext from '../contexts';
import applyDataFilters, { sortBy } from '../data/filters';

export default function Table() {
  const {
    data: { planets },
    filters,
    numericComparisons,
  } = useContext(PlanetsTableContext);

  const {
    filterByName: { name: nameToFilterBy },
    filterByNumericValues,
    order,
  } = filters;

  const { column: columnToSortBy, sort: sortOrder } = order;

  planets.forEach((planet) => delete planet.residents);

  const numericFilters = filterByNumericValues.map(
    ({ column, comparison, value }) => ({ [column]: numericProperty }) => (
      numericComparisons[comparison](numericProperty, value)
    ),
  );

  const filtersToApply = [
    ({ name }) => name.toLowerCase().includes(nameToFilterBy.toLowerCase()),
    ...numericFilters,
  ];

  const filteredPlanets = applyDataFilters(planets, filtersToApply);
  sortBy(columnToSortBy, sortOrder, filteredPlanets);

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
