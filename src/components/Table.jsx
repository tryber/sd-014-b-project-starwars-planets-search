import React from 'react';
import heads from '../data/tableHeads';
import usePlanets from '../hooks/usePlanets';

export default function Table() {
  const { data, filters } = usePlanets();

  // Refatorando e excluindo useEffects com ajuda do Glauco e o video https://www.youtube.com/watch?v=OlVkYnVXPl0

  let filteredData = data.filter(
    (planet) => planet.name.includes(filters.filterByName.name),
  );

  filters.filterByNumericValues.forEach(({ column, value, comparison }) => {
    switch (comparison) {
    case 'maior que':
      filteredData = filteredData.filter(
        (planet) => Number(planet[`${column}`]) > Number(value),
      );
      break;
    case 'menor que':
      filteredData = filteredData.filter(
        (planet) => Number(planet[`${column}`]) < Number(value),
      );
      break;
    case 'igual a':
      filteredData = filteredData.filter(
        (planet) => Number(planet[`${column}`]) === Number(value),
      );
      break;
    default:
      break;
    }
  });

  return (
    <table>
      <thead>
        <tr>
          {heads.map((head) => (<th key={ head }>{head}</th>))}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((planet) => (
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
