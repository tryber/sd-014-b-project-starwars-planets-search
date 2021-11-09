import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import TableItem from './TableItem';

function Table() {
  const { renderPlanetList, Planets } = useContext(Context);

  useEffect(() => {
    Planets();
  }, [Planets]);

  return (
    <table>
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
        { renderPlanetList.map((planet, index) => (
          <TableItem key={ index } planet={ planet } />
        )) }
      </tbody>
    </table>
  );
}

export default Table;
