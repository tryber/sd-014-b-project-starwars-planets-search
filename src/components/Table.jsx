import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import Search from './Search';

export default function Table() {
  const { dataFiltered } = useContext(MyContext);

  return (
    <>
      <Search />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Orbitual Period</th>
            <th>Population</th>
            <th>Rotaion Period</th>
            <th>Surface Water</th>
            <th>Terrain</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {dataFiltered.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.climate}</td>
              <td>{planet.created}</td>
              <td>{planet.diameter}</td>
              <td>{planet.edited}</td>
              <td>{planet.films}</td>
              <td>{planet.gravity}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.population}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.terrain}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </>
  );
}
