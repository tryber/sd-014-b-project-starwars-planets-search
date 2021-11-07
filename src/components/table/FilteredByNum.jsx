import React, { useState, useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';

function FilteredByNum() {
  const STATE = [];
  const { data, filters: { filterByNumericValues } } = useContext(PlanetContext);
  const [filteredPlanets] = useState(STATE);

  // Consultei o PR do Martin Brazón para fazer este filtro
  // Link: https://github.com/tryber/sd-012-project-starwars-planets-search/pull/75/commits/a30c8dff57e8d0b8caf8927d5bf1d915726ba2fb
  filterByNumericValues.map(({ column, comparison, value }) => {
    switch (comparison) {
    case 'maior que':
      data.filter((planet) => (
        Number(planet[column]) !== 'unknown'
        && Number(planet[column]) > Number(value)
        && STATE.push(planet)
      ));
      break;

    case 'igual a':
      data.filter((planet) => (
        Number(planet[column]) !== 'unknown'
        && Number(planet[column]) === Number(value)
        && STATE.push(planet)
      ));
      break;

    case 'menor que':
      data.filter((planet) => (
        Number(planet[column]) !== 'unknown'
        && Number(planet[column]) < Number(value)
        && STATE.push(planet)
      ));
      break;

    default:
      return data;
    }

    return data;
  }, [filterByNumericValues, filteredPlanets]);

  return (
    <tbody>
      {
        filteredPlanets.map((planet, index) => (
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
        ))
      }
    </tbody>
  );
}

export default FilteredByNum;
