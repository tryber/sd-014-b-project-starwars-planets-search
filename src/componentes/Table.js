import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const Table = () => {
  const { data } = useContext(DataContext);
  let tBody = [];
  console.log(data);
  if (data) {
    tBody = data.map((row) => (
      <tr key={ row.name }>
        <td>{ row.name }</td>
        <td>{ row.rotation_period }</td>
        <td>{ row.orbital_period }</td>
        <td>{ row.diameter }</td>
        <td>{ row.climate }</td>
        <td>{ row.gravity }</td>
        <td>{ row.terrain }</td>
        <td>{ row.surface_water }</td>
        <td>{ row.population }</td>
        <td>{ row.residents.length }</td>
        <td>{ row.films.length }</td>
        <td>{ row.created }</td>
        <td>{ row.edited }</td>
      </tr>
    ));
  }

  return (
    <table border="1">
      <thead>
        <caption>Table!</caption>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climete</th>
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
        { data && tBody }
      </tbody>
    </table>
  );
};

export default Table;
