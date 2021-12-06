/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';
import Filter from './Filter';
import Header from './Header';

const Table = () => {
  const { getDataApi, planetFiltered } = useContext(ContextPlanets);
  const dataKeys = planetFiltered.length > 0
  && Object.keys(planetFiltered[0]);
  const titles = planetFiltered.length > 0
  && dataKeys.filter((title) => title !== 'residents');

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <>
      <Header />
      <Filter />
      <table>
        <thead>
          <tr>
            { planetFiltered.length > 0 && titles.map((title, index) => (
              <th key={ index }>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          { planetFiltered.map((planet, index) => {
            const { name, rotation_period: rotation, orbital_period: orbital,
              diameter, climate, gravity, terrain, surface_water: surface, population,
              films, created, edited, url } = planet;
            return (
              <tr key={ index }>
                <td data-testid="planet-name">{ name }</td>
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
    </>
  );
};

export default Table;
