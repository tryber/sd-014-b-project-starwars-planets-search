import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const { data, columns, settingPlanets } = useContext(PlanetsContext);
  useEffect(() => {
    settingPlanets();
  }, []);

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
          data.map((item, index) => (
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
