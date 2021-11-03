import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Loading from './Loading';
// <div>
// isFetching,
//     {isFetching
//       ? <span>Loading...</span>
//       :
const Table = () => {
  const { data, filters: { filterByName: { name },
    filterByNumericValues }, isFetching } = useContext(PlanetsContext);
  console.log(filterByNumericValues);
  console.log(name);

  const dealWithFilterPresence = () => {
    if (name.length !== 0) {
      return data
        .filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (filterByNumericValues !== undefined && filterByNumericValues.length !== 0) {
      const filterWithNumericConditions = filterByNumericValues
        .map(({ column, comparison, value }) => {
          switch (comparison) {
          case 'menor que':
            return data.filter((itemTable) => Number(itemTable[column]) < Number(value));
          case 'igual a':
            return data.filter((itemTable) => Number(itemTable[column])
            === Number(value));
          case 'maior que':
            return data.filter((itemTable) => Number(itemTable[column]) > Number(value));
          default:
            return data;
          }
        });
      return filterWithNumericConditions[0];
    }
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
        {isFetching ? <Loading />
          : dealWithFilterPresence()
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
    </table>
  );
};
export default Table;
