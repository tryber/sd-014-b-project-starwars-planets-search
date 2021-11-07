import React from 'react';
import Row from './Row';

const Table = () => (
  <div>
    <table>
      <tbody>
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
        <Row />
      </tbody>
    </table>
  </div>
);

export default Table;
