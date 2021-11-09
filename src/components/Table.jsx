import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import Filters from './Filters';

function Table() {
  const {
    API, filters: {
      filterByName: { name }, filterByNumericValues,
    },
  } = useContext(MyContext);

  const [state, setState] = useState([]);

  let filteredColumn = [...API];

  useEffect(() => {
    if (filterByNumericValues > 0) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        filteredColumn = API.filter((planet) => {
          if (comparison === 'maior que') {
            return +(planet[column]) > +(value);
          } if (comparison === 'menor que') {
            return +(planet[column]) < +(value);
          }
          if (comparison === 'igual a') return +(planet[column]) === +(value);
          return null;
        });
      });
    }
    setState(filteredColumn);
  }, [filterByNumericValues.length]);

  useEffect(() => {
    setState(filteredColumn.filter((planet) => planet.name.toLowerCase().includes(name)));
  }, [API]);

  return (
    <>
      <Filters />
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
          {API.length > 0 && state.map((planet) => (
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
    </>
  );
}

export default Table;
