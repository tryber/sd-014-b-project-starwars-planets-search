import React from 'react';
import { DataContext, useData } from '../context/myContext';

const tableThs = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
  'Gravity', 'Terrain', 'Surface Water', 'Population', ' Films', 'Created', 'Edited',
  'URL'];

const renderTable = (data) => (
  data.map((planet) => (
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
  ))
);

const Table = () => {
  const { data } = useData(DataContext);
  console.log(data);
  return (
    <table>
      <tr>
        { tableThs.map((text) => <th key={ text }>{text}</th>)}
      </tr>

      {data.length > 0 ? renderTable(data) : 'Loading'}

    </table>
  );
};

export default Table;
