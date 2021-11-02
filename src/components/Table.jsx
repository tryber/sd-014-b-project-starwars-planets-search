import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
// <div>
// isFetching,
//     {isFetching
//       ? <span>Loading...</span>
//       :
const Table = () => {
  const { data, filters: { filterByName: { name },
    filterByNumericValues } } = useContext(PlanetsContext);

  const dealWithFilterPresence = () => {
    if (name.length !== 0) {
      data
        .filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    }
    filterByNumericValues.map((chave) => (
      data
        .filter((item) => item[chave.column]
        === chave.column
      && item[chave.comparison]
      === chave.comparison
      && item[chave.value] === chave.value)));
    return data;
  };

  return (
    <table className="table-container">
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
        {dealWithFilterPresence()
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
              <td>{planet.films.toString()}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default Table;
