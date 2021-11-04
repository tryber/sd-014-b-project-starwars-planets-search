import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const { columns, settingPlanets, resultSearch } = useContext(PlanetsContext);
  useEffect(() => {
    settingPlanets();
  }, []);

  // const newData = data;
  // useEffect(() => {
  //   if (resultSearch.length > 0) {
  //     const newData = resultSearch;
  //   }
  // }, []);
  console.log(columns);
  return (
    <table border="1">
      <thead>
        <tr>
          {
            columns.map((column, index) => (
              <th key={ index }>{ column.replace(/_/g, ' ').toUpperCase() }</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          resultSearch.map((item, index) => (
            <tr key={ index }>
              <td>{item.name}</td>
              <td>{item.rotation_period}</td>
              <td>{item.orbital_period}</td>
              <td>{item.diameter}</td>
              <td>{item.climate}</td>
              <td>{item.gravity}</td>
              <td>{item.terrain}</td>
              <td>{item.surface_water}</td>
              <td>{item.population}</td>
              <td>{item.films.map((film) => film) }</td>
              <td>{item.created}</td>
              <td>{item.edited}</td>
              <td>{item.url}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
