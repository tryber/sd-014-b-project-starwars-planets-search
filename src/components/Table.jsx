import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const headers = [
    'Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
    'Created', 'Edited', 'URL',
  ];
  const { filtered, loading,
    filters: { filterByNumericValues } } = useContext(PlanetContext);
  if (loading) {
    return (<h2>Loading...</h2>);
  }
  return (
    <table border="1">
      <thead>
        <tr>
          {headers.map((title) => <th key={ title }>{ title }</th>)}
        </tr>
      </thead>
      <tbody>
        {filtered.filter((planet) => {
          if (!filterByNumericValues.value) return true;
          if (filterByNumericValues.comparison === 'maior que') {
            return (
              Number(planet[filterByNumericValues.column])
                > Number(filterByNumericValues.value)
            );
          }
          if (filterByNumericValues.comparison === 'menor que') {
            return (
              Number(planet[filterByNumericValues.column])
                < Number(filterByNumericValues.value)
            );
          }
          if (filterByNumericValues.comparison === 'igual a') {
            return (
              Number(planet[filterByNumericValues.column])
                === Number(filterByNumericValues.value)
            );
          }
          return true;
        }).map((planet) => (
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

export default Table;
