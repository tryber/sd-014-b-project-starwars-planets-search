import React, { useContext } from 'react';
import PlanetsContext from '../Context/StarWarsContext';

const Table = () => {
  const { data,
    filters: { filterByName, filterByNumericValues } } = useContext(PlanetsContext);
  const defaultValue = { column: 'population', comparison: 'maior que', value: '' };
  const { column, comparison, value } = filterByNumericValues[filterByNumericValues
    .length - 1] || defaultValue;
  return (
    (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotatio Period</th>
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
          { data
            .filter(({ name }) => name.toLowerCase().includes(filterByName.toLowerCase()))
            .filter((planet) => {
              if (!value) return true;
              if (comparison === 'maior que') {
                return Number(planet[column]) > Number(value);
              }
              if (comparison === 'menor que') {
                return Number(planet[column]) < Number(value);
              }
              if (comparison === 'igual a') return planet[column] === value;
              return true;
            })
            .map((planet) => (
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
      </table>)
  );
};
export default Table;
