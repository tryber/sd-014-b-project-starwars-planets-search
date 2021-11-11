import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function Table() {
  const { data, inputFilter, filters } = useContext(Context);

  let filteredPlanets = data.filter((planets) => planets
    .name.toLowerCase().includes(inputFilter.toLowerCase()));

  filters.filterByNumericValues.forEach((filter) => {
    const { column, comparison, value } = filter;
    switch (comparison) {
    case 'maior que':
      filteredPlanets = filteredPlanets
        .filter((planet) => Number(planet[column]) > Number(value));
      return filteredPlanets;
    case 'menor que':
      filteredPlanets = filteredPlanets
        .filter((planet) => Number(planet[column]) < Number(value));
      return filteredPlanets;
    case 'igual a':
      filteredPlanets = filteredPlanets
        .filter((planet) => Number(planet[column]) === Number(value));
      return filteredPlanets;
    default:
      break;
    }
  });

  const planets = () => filteredPlanets.map((planet, index) => (
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
  ));

  return (
    <main>
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
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          { planets() }
        </tbody>
      </table>
    </main>
  );
}
