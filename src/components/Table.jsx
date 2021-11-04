import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const { data, filters: { filterByName: { name },
    filterByNumericValues } } = useContext(PlanetsContext);
  const [planets, setPlanets] = useState(data);

  useEffect(() => {
    setPlanets(data);
    const filterNamePlanets = [...data];
    const dealWithFilterPresence = () => {
      if (name.length !== 0) {
        setPlanets(filterNamePlanets
          .filter((item) => item.name.toLowerCase().includes(name.toLowerCase())));
      }
      if (filterByNumericValues.length !== 0) {
        filterByNumericValues
          .forEach(({ column, comparison, value }) => {
            switch (comparison) {
            case 'menor que':
              setPlanets(filterNamePlanets
                .filter((itemTable) => Number(itemTable[column]) < Number(value)));
              break;
            case 'igual a':
              setPlanets(filterNamePlanets
                .filter((itemTable) => Number(itemTable[column])
                === Number(value)));
              break;
            case 'maior que':
              setPlanets(filterNamePlanets
                .filter((itemTable) => Number(itemTable[column]) > Number(value)));
              break;
            default:
              return filterNamePlanets;
            }
            if (name.length !== 0) {
              setPlanets(filterNamePlanets
                .filter((item) => item.name.toLowerCase().includes(name.toLowerCase())));
            }
          });
      }
      return filterNamePlanets;
    };

    dealWithFilterPresence();
  }, [filterByNumericValues, name, data]);

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
        {planets
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
