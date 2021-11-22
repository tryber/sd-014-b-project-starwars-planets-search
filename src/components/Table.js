import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import NewRow from './NewRow';

function Table() {
  const { data, requestApi } = useContext(PlanetsContext);

  useEffect(() => {
    requestApi();
  }, [requestApi]);

  return (
    <main>
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
          {data
        && (data.map((element, index) => <NewRow key={ index } elements={ element } />))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
