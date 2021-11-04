/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';

const Table = () => {
  const { getDataApi, data } = useContext(ContextPlanets);
  const dataKeys = data.length > 0 && Object.keys(data[0]);
  const titles = data.length > 0 && dataKeys.filter((title) => title !== 'residents');

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          { data.length > 0 && titles.map((title, index) => (
            <th key={ index }>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { data.length > 0 && data.map((planet, index) => {
          const { name, rotation_period: rotation, orbital_period: orbital,
            diameter, climate, gravity, terrain, surface_water: surface, population,
            films, created, edited, url } = planet;
          return (
            <tr key={ index }>
              <td>{ name }</td>
              <td>{ rotation }</td>
              <td>{ orbital }</td>
              <td>{ diameter }</td>
              <td>{ climate }</td>
              <td>{ gravity }</td>
              <td>{ terrain }</td>
              <td>{ surface }</td>
              <td>{ population }</td>
              <td>{JSON.stringify(films)}</td>
              <td>{ created }</td>
              <td>{ edited }</td>
              <td>{ url }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
