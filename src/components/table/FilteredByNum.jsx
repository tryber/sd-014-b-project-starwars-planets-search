import React, { useState, useContext, useEffect } from 'react';
import PlanetContext from '../../context/PlanetContext';

function FilteredByNum() {
  const STATE = [];
  const { data, filters: { filterByNumericValues } } = useContext(PlanetContext);
  const [filteredPlanets, setFilteredPlanets] = useState(STATE);

  // Consultei o PR do Martin Brazón para fazer este filtro
  // Link: https://github.com/tryber/sd-012-project-starwars-planets-search/pull/75/commits/a30c8dff57e8d0b8caf8927d5bf1d915726ba2fb
  useEffect(() => {
    let l = [...data];
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      switch (comparison) {
      case 'maior que':
        l = l.filter((planet) => (
          Number(planet[column]) !== 'unknown'
          && Number(planet[column]) > Number(value)
        ));
        break;

      case 'igual a':
        l = l.filter((planet) => (
          Number(planet[column]) !== 'unknown'
          && Number(planet[column]) === Number(value)
        ));
        break;

      case 'menor que':
        l = l.filter((planet) => (
          Number(planet[column]) !== 'unknown'
          && Number(planet[column]) < Number(value)
        ));
        break;

      default:
        return data;
      }
    });
    setFilteredPlanets(l);
  }, [filterByNumericValues, data]);

  return (
    <tbody>
      {
        filteredPlanets.map((planet, index) => (
          <tr key={ index }>
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
        ))
      }
    </tbody>
  );
}

export default FilteredByNum;
