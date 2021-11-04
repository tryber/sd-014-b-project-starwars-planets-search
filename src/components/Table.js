import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import '../styles/index.css';

function Table() {
  const { data, isFetching,
    filters: { filterByName, currentColumn,
      currentComparison, currentValue, isFiltered } } = useContext(PlanetsContext);

  function filteredPlanets() {
    if (isFiltered) {
      return data.filter((key) => {
        switch (currentComparison) {
        case 'maior que':
          return Number(key[currentColumn]) > currentValue;
        case 'menor que':
          return Number(key[currentColumn]) < currentValue;
        case 'igual a':
          return key[currentColumn] === currentValue;
        default:
          return '';
        }
      });
    }
    return data;
  }

  return (
    !isFetching && (
      <table>
        <thead>
          <tr>
            {
              Object.keys(data[0]).map((key, index) => (
                <th key={ index }>{key}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            filteredPlanets().filter(({ name }) => name.includes(filterByName.name))
              .map((planet, index) => (
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
      </table>
    )
  );
}

export default Table;
