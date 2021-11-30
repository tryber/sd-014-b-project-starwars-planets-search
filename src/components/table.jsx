import React, { useContext } from 'react';
import PlanetsContext from '../Context/StarWarsContext';
import filterData from '../helpers/filter';

const Table = () => {
  const { data,
    filters: { filterByName, filterByNumericValues } } = useContext(PlanetsContext);

  let dataFiltered = [];
  if (filterByNumericValues.length > 0) {
    dataFiltered = filterData(data, filterByNumericValues);
  } else {
    dataFiltered = data;
  }
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
          { dataFiltered
            .filter(({ name }) => name.toLowerCase().includes(filterByName.toLowerCase()))
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
